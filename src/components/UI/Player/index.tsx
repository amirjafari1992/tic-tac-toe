import styled from 'styled-components';

type PlayerProps = {
    active: boolean;
}

const Player = styled.div<PlayerProps>`
font-size: 32px;
    color: rgba(0,0,0,.6);
    padding: 10px 25px 32px;
    border-radius: 16px;
    position: relative;

    ${({ active }) => active && `
        background: #C1EE3F;
        color: #fff;
        &:after {
            content: 'active';
            position: absolute;
            bottom: 10px;
            left: 0;
            color: #fff;
            font-size: 14px;
            width: 100%;
            text-align: center;
        }
    `}
`;

export default Player;
