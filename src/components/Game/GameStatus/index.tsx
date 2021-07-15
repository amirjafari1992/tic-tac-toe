import * as React from 'react';
import { Row } from '../../Layout';
import { Status } from '../../UI/Status';

export interface GameStatusProps {
    winner: string | null;
    players: PlayerItem;
}

const GameStatus: React.FC<GameStatusProps> = ({winner, players}) => {
    const {playerOne, playerTwo} = players;

    return (
        <Row gap={20} center>
            <Status mode={winner ? 'winner' : 'playing'}>
                {
                    winner
                        ? `Winner is ${winner === 'X' ? playerOne : playerTwo}`
                        : `Playing`
                }
            </Status>
        </Row>
    );
}

export default GameStatus;