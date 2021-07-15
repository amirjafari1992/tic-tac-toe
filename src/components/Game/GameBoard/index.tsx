import { BoardState } from '../GameState';
import { SquareProps, Square } from '../GameSquare';
import { Column, Row } from "../../Layout";
import { Box } from '../../UI/Box';

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
  winner: string | null;
  jumpTo: (item: number) => void
  isSaved: boolean;
  setIsSaved: (x:boolean) => void;
};
export function Board({ board, onClick, winner, jumpTo, isSaved, setIsSaved }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };

  const boardItemLength = board.filter(item => item !== null).length;
  const isBoardFull = boardItemLength === 9;
  const isGameDraw = isBoardFull && !winner;

  if (isGameDraw) jumpTo(0)

  

  return (
    <Box>
      <Column gap={0}>
        <Row border gap={0}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row border gap={0}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row border gap={0}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    </Box>
  );
}
