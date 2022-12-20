// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%
    display: flex;
    margin: 0;
    padding: 0;
    background: #1E1E1E;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: #FFFFFF;
  }
`;

export default GlobalStyle;