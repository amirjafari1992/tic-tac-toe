import * as React from 'react';
import { useState } from 'react';

import Game from '../components/Game';
import { useGameState } from '../components/Game/GameState';
import { usePlayer } from '../contexts/PlayerContext';

const GamePage: React.FC = () => {
  const {
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

  const { state, dispatch } = usePlayer();
  const { playerOne, playerTwo } = state.users;
  const [isSaved, setIsSaved] = useState(false);

  const handleRestart = () => {
    const player = winner === 'X' ? playerOne : playerTwo;

    setIsSaved(false);
    jumpTo(0);
    if (winner) {
      dispatch({
        type: 'ADD_WINNER',
        payload: {
          name: player,
          object: winner,
          date: new Date(),
        },
      });
    }
  };

  return (
    (
            <>
                <Game>
                    <Game.Status
                        winner={winner}
                        players={{ playerOne, playerTwo }}
                    />
                    <Game.Main
                        isSaved={isSaved}
                        setIsSaved={setIsSaved}
                        players={{ playerOne, playerTwo }}
                        current={current}
                        xIsNext={xIsNext}
                        handleClick={handleClick}
                        jumpTo={jumpTo}
                        winner={winner}
                    />
                    <Game.Buttons handleRestart={handleRestart} />
                </Game>
            </>
    )
  );
};

export default GamePage;
