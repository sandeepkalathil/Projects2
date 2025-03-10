import React, { useEffect, useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from './ui/Button';
import { Trophy } from 'lucide-react';

export const ModeratorView: React.FC = () => {
  const { currentNumbers, winner, resetGame } = useGameStore();
  const [timeUntilNext, setTimeUntilNext] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntilNext((prev) => (prev > 0 ? prev - 1 : 20));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTimeUntilNext(20);
  }, [currentNumbers]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Game Control Panel</h2>
          {!winner && (
            <p className="text-sm text-gray-600 mt-1">
              Next number in: {timeUntilNext} seconds
            </p>
          )}
        </div>
        {winner && (
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">{winner} wins!</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Called Numbers</h3>
        <div className="flex flex-wrap gap-2">
          {currentNumbers.map((number, index) => (
            <span
              key={number}
              className={cn(
                "inline-block px-3 py-1 rounded-full font-medium",
                index === currentNumbers.length - 1
                  ? "bg-blue-500 text-white animate-pulse"
                  : "bg-blue-100 text-blue-800"
              )}
            >
              {number}
            </span>
          ))}
        </div>
      </div>

      {winner && (
        <Button
          onClick={resetGame}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Start New Game
        </Button>
      )}
    </div>
  );
};