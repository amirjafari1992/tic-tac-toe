import * as React from 'react';
import { useHistory } from 'react-router';
import { Row } from '../../Layout';
import { Button } from '../../UI/Button';

export interface GameButtonsProps {
    handleRestart: () => void
}

const GameButtons: React.FC<GameButtonsProps> = ({handleRestart}) => {
    let history = useHistory();
    
    return (
        <Row gap={20} center>
            <Button onClick={() => history.push('/scoreBoard')}>Score board</Button>
            <Button onClick={() => handleRestart()}>Restart</Button>
        </Row>
    );
}

export default GameButtons;