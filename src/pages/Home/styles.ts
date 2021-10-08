import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin-bottom: 32px;

  @media (max-width: 502px) {
    justify-content: center;
  }
`;

export const PaymentInfo = styled.div`
  width: 280px;
  height: 140px;
  background-color: ${theme.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  span {
    font-size: 48px;
    font-weight: bold;
  }

  @media (max-width: 502px) {
    margin-bottom: 16px;
  }
`;
