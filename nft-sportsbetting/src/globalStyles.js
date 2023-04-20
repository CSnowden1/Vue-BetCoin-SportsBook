import { createGlobalStyle } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: #1E1E1E;
    font-family: 'Open Sans', sans-serif;
    color: #FFFFFF;
  }
`;

export default GlobalStyle;