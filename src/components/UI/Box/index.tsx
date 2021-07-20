import styled from 'styled-components';

type BoxProps = {
    center?: boolean;
}

const Box = styled.div<BoxProps>`
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    background-color: #fff;
    overflow: hidden;
    padding: 15px;
    margin-bottom: 15px;
    ${({ center }) => center && `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `}
    &.p-5 {
        padding: 50px;
    }
`;

export default Box;
