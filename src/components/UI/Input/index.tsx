import styled from 'styled-components';

type InputProps = {
    center?: boolean;
}

export const Input = styled.input<InputProps>`
    background: #eaeaea;
    border: none;
    padding: 25px;
    display: block;
    margin-bottom: 10px;
    width: 320px;
    border-radius: 20px;
    font-size: 20px;
    outline: none;
    transition: all ease .5s;
    border: 1px solid transparent;

    &:focus {
        border: 1px solid orange;
    }
`;

