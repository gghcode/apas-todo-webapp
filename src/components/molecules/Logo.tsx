import * as React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img.attrs({
  src: '/images/logo.png',
})`
  width: 150px;
  height: 130px;
`;

export const Logo = () => (
  <div>
    <LogoImage />
  </div>
);
