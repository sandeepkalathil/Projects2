# Types Directory

This directory contains TypeScript type definitions used throughout the Modern Bingo Game application.

## Type Definitions

### Game Types (`game.ts`)
- `Player` - Player information and board state
- `GameState` - Global game state and actions

## Usage

Types are used to ensure type safety across the application:

```typescript
import { Player, GameState } from './types/game';

const player: Player = {
  id: '1',
  name: 'John',
  score: 0,
  board: [[]]
};
```