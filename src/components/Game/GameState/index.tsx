import { useState } from 'react';

import { usePlayer } from '../../../contexts/PlayerContext';

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];
const createBoardState = () => Array<Value>(9).fill(null);

function calculateWinner(boardState: BoardState) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      return boardState[a];
    }
  }
  return null;
}

export type GameState = {
  history: BoardState[],
  step: number,
}

type UseGameState = {
  gameState: GameState,
    current: BoardState,
    xIsNext: boolean,
    winner: string | null,
    handleClick: (s: number) => void,
    jumpTo: (x: number) => void,
}

export function useGameState(): UseGameState {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  const current = gameState.history[gameState.step];
  const winner = calculateWinner(current);
  const { state } = usePlayer();
  const xIsNext = state.lastWinner.object === 'X' ? (gameState.step % 2) === 0 : (gameState.step % 2) !== 0;

  function handleClick(square: number) {
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }
    const newBoardState = boardState.slice();
    if (state.scoreBoard.length > 0) {
      const winnersCount = state.scoreBoard.length;
      const lastWinner = state.scoreBoard[winnersCount - 1];

      if (lastWinner.object === 'X') {
        newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
      } else {
        newBoardState[square] = (gameState.step % 2) === 0 ? 'O' : 'X';
      }
    } else {
      newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
    }

    history.push(newBoardState);
    setGameState({
      history,
      step: history.length - 1,
    });
  }
  function jumpTo(step: number) {
    setGameState({
      history: gameState.history,
      step,
    });
  }

  return {
    gameState,
    current,
    xIsNext,
    winner,
    handleClick,
    jumpTo,
  };
}
