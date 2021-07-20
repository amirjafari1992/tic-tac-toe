import styled from 'styled-components';

import oIcon from '../../../assets/images/o.png';
import xIcon from '../../../assets/images/x.png';
import { Value } from '../GameState';

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

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
    <StyledSquare onClick={onClick}>
      {value === 'X' && <Image src={xIcon} />}
      {value === 'O' && <Image src={oIcon} />}
    </StyledSquare>
);

export default Square;
