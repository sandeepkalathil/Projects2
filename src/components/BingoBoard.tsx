import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Player } from '../types/game';
import { cn } from '../lib/utils';

interface BingoBoardProps {
  player: Player;
}

export const BingoBoard: React.FC<BingoBoardProps> = ({ player }) => {
  const { currentNumbers, selectNumber } = useGameStore();

  const handleNumberClick = (number: number) => {
    if (currentNumbers.includes(number)) {
      selectNumber(player.id, number);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-2">
      {player.board.map((row, i) =>
        row.map((number, j) => {
          const isDrawn = currentNumbers.includes(number);
          const isSelected = player.selectedNumbers.has(number);

          return (
            <button
              key={`${i}-${j}`}
              onClick={() => handleNumberClick(number)}
              disabled={!isDrawn || isSelected}
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-md text-lg font-semibold transition-all",
                isSelected && "bg-green-500 text-white transform scale-105",
                isDrawn && !isSelected && "bg-blue-100 text-blue-800 animate-pulse",
                !isDrawn && "bg-gray-100 text-gray-800 cursor-not-allowed"
              )}
            >
              {number}
            </button>
          );
        })
      )}
    </div>
  );
};