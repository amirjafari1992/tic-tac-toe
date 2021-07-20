import styled from 'styled-components';

type LayoutProps = {
  gap: number;
  center?: boolean;
  border?: boolean;
};

export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap}px;
  ${({ border }) => border && `
    &:not(:last-child) {
      border-bottom: 1px solid #F1F1F1;
    }
  `}
  ${({ center }) => center && `
    justify-content: center;
  `}
`;

export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap}px;
  justify-content: center;
`;
