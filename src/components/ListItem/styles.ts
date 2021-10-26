import styled from 'styled-components';
import theme from '../../styles/theme';

interface ItemProps {
  itsPaid: boolean;
}

export const Container = styled.div<ItemProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.itsPaid ? theme.green : theme.buttonRed};
  height: 110px;
  padding: 32px;
  font-weight: bold;
  p {
    font-size: 16px;
  }
  span {
    font-size: 24px;
  }
`;
