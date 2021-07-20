import {
  createContext, useReducer, useContext, ReactNode,
} from 'react';

const defaultState = {
  users: {
    playerOne: 'Player one',
    playerTwo: 'Player two',
  },
  isLogedIn: false,
  lastWinner: {
    object: 'X',
  },
  scoreBoard: [],
};
const PlayerContext = createContext<PlayerContext>(undefined);

function playerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_NAMES':
      return {
        ...state,
        users: action.payload,
        isLogedIn: true,
      };
    case 'ADD_WINNER':
      return {
        ...state,
        lastWinner: action.payload,
        scoreBoard: [
          ...state.scoreBoard,
          { ...action.payload },
        ],
      };
  }
}

export function PlayerProvider({ children }: { children: ReactNode }): any {
  const [state, dispatch] = useReducer(playerReducer, defaultState);

  return (
        <PlayerContext.Provider value={{ state, dispatch }}>
            {children}
        </PlayerContext.Provider>
  );
}

export function usePlayer(): any {
  const context = useContext(PlayerContext);

  if (!context) throw new Error('usePlayer must be used inside of the PlayerProvider!');

  return context;
}
