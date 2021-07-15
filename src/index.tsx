import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import Main from './components/Main';
import { PlayerProvider } from './contexts/PlayerContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <PlayerProvider>
      <Main />
    </PlayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
