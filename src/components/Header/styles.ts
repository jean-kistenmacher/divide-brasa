import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background-color: ${theme.orange};
  color: ${theme.white};
  padding: 0px 40px;

  @media (max-width: 420px) {
    padding: 6px 40px;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  h1 {
    margin-left: 8px;
  }
`;

export const LogoutButton = styled.button`
  background-color: ${theme.buttonRed};
  border: none;
  border-radius: 4px;
  padding: 12px 26px;
  font-weight: bold;
  color: ${theme.white};

  svg {
    margin-right: 8px;
  }
`;
