import { create } from 'zustand';
import { GameState, Player } from '../types/game';

const generateBingoBoard = (): number[][] => {
  const board: number[][] = Array(5).fill(null).map(() => Array(5).fill(0));
  const numbers = new Set<number>();
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let num;
      do {
        num = Math.floor(Math.random() * 75) + 1;
      } while (numbers.has(num));
      numbers.add(num);
      board[i][j] = num;
    }
  }
  
  return board;
};

export const useGameStore = create<GameState>((set, get) => ({
  players: [],
  currentNumbers: [],
  gameStarted: false,
  winner: null,
  drawInterval: null,
  selectedNumbers: {},

  addPlayer: (name: string) => {
    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name,
      score: 0,
      board: generateBingoBoard(),
      selectedNumbers: new Set(),
    };
    set((state) => ({ players: [...state.players, newPlayer] }));
  },

  startGame: () => {
    const drawInterval = setInterval(() => {
      const state = get();
      if (!state.winner && state.currentNumbers.length < 75) {
        state.drawNumber();
      } else {
        clearInterval(state.drawInterval!);
        set({ drawInterval: null });
      }
    }, 20000); // 20 seconds

    set({ 
      gameStarted: true,
      drawInterval,
    });
  },

  drawNumber: () => {
    const { currentNumbers } = get();
    if (currentNumbers.length >= 75) return;

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 75) + 1;
    } while (currentNumbers.includes(newNumber));
    
    set((state) => ({
      currentNumbers: [...state.currentNumbers, newNumber],
    }));
  },

  selectNumber: (playerId: string, number: number) => {
    const { currentNumbers, players } = get();
    if (!currentNumbers.includes(number)) return;

    const player = players.find(p => p.id === playerId);
    if (!player || player.selectedNumbers.has(number)) return;

    set((state) => ({
      players: state.players.map((p) => {
        if (p.id === playerId) {
          const newSelectedNumbers = new Set(p.selectedNumbers);
          newSelectedNumbers.add(number);
          return {
            ...p,
            selectedNumbers: newSelectedNumbers,
            score: p.score + 1,
          };
        }
        return p;
      }),
    }));

    // Check for winner
    const updatedPlayer = get().players.find(p => p.id === playerId);
    if (updatedPlayer && updatedPlayer.score >= 5) {
      clearInterval(get().drawInterval!);
      set({ 
        winner: updatedPlayer.name,
        drawInterval: null,
      });
    }
  },

  resetGame: () => {
    if (get().drawInterval) {
      clearInterval(get().drawInterval);
    }
    set({
      players: [],
      currentNumbers: [],
      gameStarted: false,
      winner: null,
      drawInterval: null,
      selectedNumbers: {},
    });
  },
}));