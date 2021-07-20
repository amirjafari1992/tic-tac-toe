import * as React from 'react';

import { Column, Row } from '../../Layout';
import Player from '../../UI/Player';
import Board from '../GameBoard';
import { BoardState } from '../GameState';

export interface GameMainProps {
    isSaved: boolean;
    setIsSaved: (item: boolean) => void;
    players: PlayerItem;
    current: BoardState;
    xIsNext: boolean;
    handleClick: (x: number) => void;
    jumpTo: (item: number) => void;
    winner: string | null;
}

const GameMain: React.FC<GameMainProps> = ({
  isSaved,
  setIsSaved,
  players,
  current,
  xIsNext,
  handleClick,
  jumpTo,
  winner,
}) => {
  const { playerOne, playerTwo } = players;

  return (
        <Row gap={20}>
            <Column gap={20}>
                <Player active={!!xIsNext}>
                    {playerOne}
                </Player>
            </Column>
            <Column gap={20}>
                <Board
                    winner={winner}
                    board={current}
                    onClick={handleClick}
                    jumpTo={jumpTo}
                    isSaved={isSaved}
                    setIsSaved={setIsSaved}
                />
            </Column>
            <Column gap={20}>
                <Player active={!xIsNext}>
                    {playerTwo}
                </Player>
            </Column>
        </Row>
  );
};

export default GameMain;
