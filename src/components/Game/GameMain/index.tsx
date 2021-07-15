import * as React from 'react';
import { Board } from '../GameBoard';

import { Column, Row } from '../../Layout';
import { Player } from '../../UI/Player';


export interface GameMainProps {
    isSaved: boolean;
    setIsSaved: (item: boolean) => void;
    players: PlayerItem;
    current: any;
    xIsNext: any;
    handleClick: any;
    jumpTo: any;
    winner: any;
}

const GameMain: React.FC<GameMainProps> = ({
    isSaved, 
    setIsSaved, 
    players, 
    current, 
    xIsNext, 
    handleClick, 
    jumpTo, 
    winner
}) => {
    const {playerOne, playerTwo} = players;
    
    return (
        <Row gap={20}>
            <Column gap={20}>
                <Player active={xIsNext ? true : false}>
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
                <Player active={!xIsNext ? true : false}>
                    {playerTwo}
                </Player>
            </Column>
        </Row>
    );
}

export default GameMain;