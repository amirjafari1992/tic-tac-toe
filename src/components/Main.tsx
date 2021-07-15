import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import GamePage from '../pages/Game';
import { usePlayer } from '../contexts/PlayerContext';
import { PrivateRoute } from './PrivateRoute';
import ScoreBoardPage from '../pages/ScoreBoard';


function Main() {
  const { state } = usePlayer()

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
}

export default Main;