export interface Player {
  id: string;
  name: string;
  score: number;
  board: number[][];
  selectedNumbers: Set<number>;
}

export interface GameState {
  players: Player[];
  currentNumbers: number[];
  gameStarted: boolean;
  winner: string | null;
  drawInterval: NodeJS.Timer | null;
  addPlayer: (name: string) => void;
  startGame: () => void;
  drawNumber: () => void;
  selectNumber: (playerId: string, number: number) => void;
  resetGame: () => void;
}