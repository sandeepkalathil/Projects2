import React from 'react';
import { useGameStore } from '../store/gameStore';

export const Scoreboard = () => {
  const { players } = useGameStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Scoreboard</h2>
      <div className="space-y-4">
        {players.map((player) => (
          <div
            key={player.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
          >
            <span className="font-semibold">{player.name}</span>
            <span className="text-lg">{player.score} points</span>
          </div>
        ))}
      </div>
    </div>
  );
};