import * as React from 'react';

import Button from '../../UI/Button';

export interface LoginButtonProps {
    handleLogin: () => void;
    text: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ handleLogin, text }) => (
        <Button onClick={() => handleLogin()} fullSize>{text}</Button>
);

export default LoginButton;
