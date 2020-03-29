import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family:'NanumSquareRoundR';
    src: url('/fonts/NanumSquareRoundR.woff2');
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-family: 'NanumSquareRoundR', sans-serif;
    background-color: ${(props) => props.theme.color.main};
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
`;
