import React from 'react';
import { useGameStore } from './store/gameStore';
import { PlayerRegistration } from './components/PlayerRegistration';
import { PlayerView } from './components/PlayerView';
import { ModeratorView } from './components/ModeratorView';

function App() {
  const { gameStarted, players } = useGameStore();

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Modern Bingo</h1>
          <PlayerRegistration />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Modern Bingo</h1>
        
        {/* Moderator View */}
        <ModeratorView />

        {/* Player Views */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {players.map((player) => (
            <PlayerView key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;