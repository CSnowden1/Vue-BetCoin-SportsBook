// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #1E1E1E;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: #FFFFFF;
  }
`;

export default GlobalStyle;