import * as React from 'react';

import Box from '../UI/Box';

import LoginButton from './LoginButton';
import LoginInput from './LoginInput';

export interface LoginProps extends React.FC {
    Input: typeof LoginInput;
    Button: typeof LoginButton;
}

const Login:LoginProps = ({ children }) => (
        <Box center className="p-5">
            {children}
        </Box>
);

Login.Input = LoginInput;
Login.Button = LoginButton;

export default Login;
