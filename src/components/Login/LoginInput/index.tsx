import React from 'react';
import { Input } from '../../UI/Input';

export interface LoginInputProps {
    value: string;
    setValue: (value:string) => void
    name: string;
}

const LoginInput: React.FC<LoginInputProps> = ({value, setValue, name}) => {

    return (
        <>
            <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder={`Enter the ${name} name`}
                role="input"
            />
        </>
    );
}

export default LoginInput;