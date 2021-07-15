import styled, { keyframes } from 'styled-components';

type StatusProps = {
    mode: 'playing' | 'winner';
}

const playingAnimation = keyframes`
 50% {
     opacity: .2;
 }
`

export const Status = styled.div<StatusProps>`
    font-size: 32px;
    color: rgba(0,0,0,.6);
    padding: 25px;
    border-radius: 16px;
    position: relative;
    color: ${({ mode }) => mode === 'winner' ? 'green' : 'black'};
    animation: ${playingAnimation} linear 2s infinite;
`;


