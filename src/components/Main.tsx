import { BrowserRouter as Router, Route } from 'react-router-dom';

import { usePlayer } from '../contexts/PlayerContext';
import GamePage from '../pages/Game';
import LoginPage from '../pages/Login';
import ScoreBoardPage from '../pages/ScoreBoard';

import PrivateRoute from './PrivateRoute';

const Main: React.FC = () => {
  const { state } = usePlayer();

  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <PrivateRoute
        path="/game"
        isAuthenticated={state.isLogedIn}
        component={GamePage}
      />
      <PrivateRoute
        path="/scoreBoard"
        isAuthenticated={state.isLogedIn}
        component={ScoreBoardPage}
      />
    </Router>
  );
};

export default Main;
