import * as React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from './Tasks';
import styled from 'styled-components';

const ContentWrapper = styled.section`
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-template-columns: 1fr auto;
  max-width: 922px;
  margin: auto;
`;

export const Content = () => (
  <ContentWrapper>
    <Sidebar />
    <Tasks />
  </ContentWrapper>
);
