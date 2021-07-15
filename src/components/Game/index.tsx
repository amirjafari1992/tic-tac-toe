import * as React from 'react';

import { Column, Row } from '../Layout';
import GameButtons from './GameButtons';
import GameMain from './GameMain';
import GameStatus from './GameStatus';

export interface GameProps extends React.FC {
    Status: typeof GameStatus;
    Main: typeof GameMain;
    Buttons: typeof GameButtons;
}
 
const Game: GameProps = ({children}) => {
    return ( 
        <Row gap={20} center>
            <Column gap={20}>
                {children}
            </Column>
        </Row>
     );
}

Game.Status = GameStatus;
Game.Main = GameMain;
Game.Buttons = GameButtons;
 
export default Game;