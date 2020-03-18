import * as React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
`;

const WindowContainer = styled.div`
  width: 390px;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;

  box-sizing: inherit;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);

  padding: 80px 55px 30px 55px;

  @media only screen and (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

interface Props {
  form: any;
}

export const FormPageTemplate: React.FC<Props> = (props: Props) => (
  <PageContainer>
    <WindowContainer>{props.form ?? {}}</WindowContainer>
  </PageContainer>
);
