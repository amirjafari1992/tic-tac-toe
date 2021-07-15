import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Login from '../components/Login';
import { usePlayer } from '../contexts/PlayerContext';


const LoginPage: React.FC = () => {
    const [playerOne, setPlayerOne] = useState<string>('');
    const [playerTwo, setPlayerTwo] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const { dispatch } = usePlayer()


    let history = useHistory();
    if (redirect) history.push('/game')

    const handleLogin = () => {
        if (playerOne && playerTwo) {
            dispatch({
                type: 'ADD_NAMES',
                payload: {
                    playerOne: playerOne,
                    playerTwo: playerTwo
                }
            })
            setRedirect(true)
        }
    }

    return (
        <Login>
            <Login.Input
                name="player one"
                value={playerOne}
                setValue={setPlayerOne}
            />
            <Login.Input
                name="player two"
                value={playerTwo}
                setValue={setPlayerTwo}
            />
            <Login.Button text="Play" handleLogin={handleLogin} />
        </Login>
    )
}

export default LoginPage;