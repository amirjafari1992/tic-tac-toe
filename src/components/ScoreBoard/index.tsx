import * as React from 'react';
import { useHistory } from 'react-router';

import { usePlayer } from '../../contexts/PlayerContext';
import Box from '../UI/Box';
import Button from '../UI/Button';

const ScoreBoard: React.FC = () => {
  const { state } = usePlayer();
  const history = useHistory();

  return (
        <Box center className="p-5">
            <ol>
                {state.scoreBoard.length > 0
                  ? state.scoreBoard.map((item: ScoreBoardItem) => <li>{item.name}</li>)
                  : <span>There is no Item to show</span>
                }
            </ol>
            <Button onClick={() => history.push('/game')} fullSize>Back</Button>
        </Box>
  );
};

export default ScoreBoard;
