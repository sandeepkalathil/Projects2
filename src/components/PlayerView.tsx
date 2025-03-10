import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Player } from '../types/game';
import { BingoBoard } from './BingoBoard';
import { cn } from '../lib/utils';

interface PlayerViewProps {
  player: Player;
}

export const PlayerView: React.FC<PlayerViewProps> = ({ player }) => {
  const { currentNumbers } = useGameStore();

  return (
    <div className={cn(
      "p-6 rounded-xl shadow-lg",
      "bg-gradient-to-br from-white to-gray-50"
    )}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{player.name}'s Board</h2>
        <div className="px-4 py-2 bg-blue-100 rounded-full">
          <span className="text-blue-800 font-semibold">Score: {player.score}</span>
        </div>
      </div>

      <BingoBoard player={player} />

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-3">Called Numbers:</h3>
        <div className="flex flex-wrap gap-2">
          {currentNumbers.map((number) => (
            <span
              key={number}
              className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};