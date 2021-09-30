import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

interface ButtonProps {
  apparence: string;
  size: string;
}

const buttonType: { [key: string]: string } = {
  logout: theme.buttonRed,
  newBarbecue: theme.grey,
  register: theme.blue,
  add: theme.green,
  back: theme.grey,
};

const buttonSize: { [key: string]: string } = {
  xs: '6px 8px',
  sm: '6px 13px',
  lg: '12px 26px',
};

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => buttonType[props.apparence]};
  border: none;
  border-radius: 4px;
  padding: ${(props) => buttonSize[props.size]};
  font-weight: bold;
  color: ${theme.white};

  ${(props) =>
    props.size !== 'xs' &&
    css`
      svg {
        margin-right: 8px;
      }
    `}
`;
