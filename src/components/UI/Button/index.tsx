import styled from 'styled-components';

type ButtonProps = {
    fullSize?: boolean;
};

const Button = styled.button<ButtonProps>`
    background: linear-gradient(225.45deg, #F4C467 14.94%, #F97E3A 77.93%);
    box-shadow: 0px 20px 30px rgba(249, 129, 60, 0.6);
    border-radius: 25px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    min-width: 370px;
    width: ${(props) => (props.fullSize ? `${100}%` : 'auto')};
    color: #fff;
    border: none;
    font-size: 35px;
    font-weight: 700;
    font-family: 'Roboto';
    cursor: pointer;
    transition: all ease .5s;
    &:active {
        box-shadow: 0px 20px 30px rgba(249, 129, 60, 0.5);
    }
`;

export default Button;
