import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from './ui/Button';

export const GameControls = () => {
  const { drawNumber, currentNumbers, resetGame, winner } = useGameStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Current Numbers</h3>
        <div className="flex flex-wrap gap-2">
          {currentNumbers.map((number) => (
            <span
              key={number}
              className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {number}
            </span>
          ))}
        </div>
      </div>

      {winner ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 {winner} wins! 🎉
          </h2>
          <Button onClick={resetGame}>New Game</Button>
        </div>
      ) : (
        <Button onClick={drawNumber} className="w-full">
          Draw Number
        </Button>
      )}
    </div>
  );
};