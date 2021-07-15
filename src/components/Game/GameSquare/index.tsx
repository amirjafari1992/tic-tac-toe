import styled from 'styled-components';
import { Value } from '../GameState';
import o_icon from '../../../assets/images/o.png';
import x_icon from '../../../assets/images/x.png';

const StyledSquare = styled.button`
  width: 170px;
  height: 170px;
  background: #fff;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background: #fbfbfb9e;
  }
  &:not(:nth-child(3n)) {
    border-right: 1px solid #F1F1F1;
  }
`;

const Image = styled.img`
  width: 70%;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  const { value } = props;
  return (
    <StyledSquare onClick={props.onClick}>
      {value === 'X' && <Image src={x_icon} />}
      {value === 'O' && <Image src={o_icon} />}
    </StyledSquare>
  );
}
