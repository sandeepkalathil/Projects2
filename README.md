# Modern Bingo Game

A modern, interactive Bingo game built with React, TypeScript, and Tailwind CSS.

## Features

- Player registration system
- Real-time score tracking
- Interactive Bingo boards
- Modern, responsive UI
- Game state management with Zustand

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-bingo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Game Rules

1. Players register their names before the game starts
2. Each player gets a unique Bingo board
3. Numbers are drawn randomly
4. Players mark matching numbers on their boards
5. First player to complete a line (horizontal, vertical, or diagonal) wins

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Vite (Build Tool)

## Testing

Run the test suite:
```bash
npm run test
```

## Building for Production

```bash
npm run build
```

## Docker Support

Build the Docker image:
```bash
docker build -t modern-bingo .
```

Run the container:
```bash
docker run -p 3000:80 modern-bingo
```

## Kubernetes Deployment

Apply the Kubernetes manifests:
```bash
kubectl apply -f k8s/
```