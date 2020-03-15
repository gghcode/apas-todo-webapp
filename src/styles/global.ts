import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family:'NanumSquareRoundR';
    src: url('/fonts/NanumSquareRoundR.woff2');
  }
  body {
    font-family: 'NanumSquareRoundR', sans-serif;
    background-color: ${(props) => props.theme.color.main};
  }
`;
