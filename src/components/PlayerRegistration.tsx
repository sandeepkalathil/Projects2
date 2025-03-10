import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from './ui/Button';

export const PlayerRegistration = () => {
  const [playerName, setPlayerName] = useState('');
  const { addPlayer, players, startGame } = useGameStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      addPlayer(playerName.trim());
      setPlayerName('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Player Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter player name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button type="submit">Add Player</Button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Registered Players:</h3>
        <ul className="space-y-2">
          {players.map((player) => (
            <li key={player.id} className="px-4 py-2 bg-gray-100 rounded-md">
              {player.name}
            </li>
          ))}
        </ul>
      </div>

      {players.length >= 2 && (
        <Button
          onClick={() => startGame()}
          className="mt-6 w-full"
        >
          Start Game
        </Button>
      )}
    </div>
  );
};