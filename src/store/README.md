# Store Directory

This directory contains the state management logic for the Modern Bingo Game application using Zustand.

## Files

- `gameStore.ts` - Main game state management including:
  - Player management
  - Game state
  - Number drawing
  - Score tracking
  - Winner detection

## State Management

The store manages:
- Player information
- Game status
- Current numbers
- Score tracking
- Winner detection

## Usage

```typescript
import { useGameStore } from './store/gameStore';

// Access state
const { players, currentNumbers } = useGameStore();

// Update state
const { addPlayer, drawNumber } = useGameStore();
```