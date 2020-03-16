import * as React from 'react';
import styled from 'styled-components';
import { Title } from '@/components/atoms/Title';

const FormWrapper = styled.form`
  width: 290px;
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  padding-bottom: 54px;
`;

const LoginInput = styled.span`
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  position: relative;
`;

const LoginButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const Button = styled.button`
  line-height: 1.5;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: all 0.4s;
`;

export const LoginForm: React.FC = () => {
  return (
    <>
      <FormWrapper>
        <TitleWrapper>
          <Title>Login</Title>
        </TitleWrapper>
        {/* <Title>Login</Title> */}
        <LoginInput>
          <input placeholder="email" />
        </LoginInput>
        <LoginInput>
          <input placeholder="password" />
        </LoginInput>
        <LoginButtonWrapper>
          <Button>Login</Button>
        </LoginButtonWrapper>
      </FormWrapper>
    </>
  );
};
