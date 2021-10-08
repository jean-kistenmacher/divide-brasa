import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    flex-direction: column;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: ${theme.font}
  }

  button{
    cursor: pointer;
  }
`;
