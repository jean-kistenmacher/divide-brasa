import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.green};
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
