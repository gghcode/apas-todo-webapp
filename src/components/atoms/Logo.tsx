import * as React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div``;
const LogoImage = styled.img.attrs({
  src: '/images/logo.png',
})`
  width: 150px;
  height: 130px;
`;

export const Logo = () => (
  <LogoContainer>
    <LogoImage />
  </LogoContainer>
);
