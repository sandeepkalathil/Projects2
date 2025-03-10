# Library Directory

This directory contains utility functions and helper methods used throughout the Modern Bingo Game application.

## Utilities

### `utils.ts`
- `cn()` - Utility for combining class names using `clsx` and `tailwind-merge`

## Usage

```typescript
import { cn } from '../lib/utils';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'override-class'
);
```