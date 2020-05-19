import { useState, useEffect } from 'react';
import checkWinner from './checkWinner';

const useGetWinnerHook = turn => {
  const [winnerState, setWinnerState] = useState({
    board: [0, 0],
    lastWinner: null
  });

  useEffect(() => {
    const winnerPlayerIndex = checkWinner(turn.gameMatrix, turn.lastPlayedCell);
    if (winnerPlayerIndex) {
      const newWinnerBoard = [...winnerState.board];

      ++newWinnerBoard[winnerPlayerIndex - 1];

      setWinnerState({ board: newWinnerBoard, lastWinner: winnerPlayerIndex });
    }
  }, [turn]);

  const resetLastWinner = () => {
    setWinnerState({ board: winnerState.board, lastWinner: null });
  };

  return [winnerState.board, winnerState.lastWinner, resetLastWinner];
};

export default useGetWinnerHook;
