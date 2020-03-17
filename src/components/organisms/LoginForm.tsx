import * as React from 'react';
import styled from 'styled-components';
import { Title } from '@/components/atoms/Title';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const FormWrapper = styled.form`
  width: 100%;
`;

const TitleWrapper = styled.div`
  box-sizing: inherit;
  padding-bottom: 37px;
`;

const InputWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-sizing: inherit;

  margin-bottom: 20px;

  position: relative;
`;

const LoginButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 160px;
  height: 50px;
  background-color: #bd59d4;
  border-radius: 25px;
  border: none;

  font-size: 14px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;

  transition: all 0.4s;

  box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);
`;

const Input = styled.input`
  font-size: 16px;
  color: #4b2354;
  line-height: 1.2;
  display: block;
  width: 100%;
  height: 62px;
  background: transparent;
  padding: 0 20px 0 23px;

  outline: none;
  border: none;

  box-sizing: border-box;
`;

const FocusInput = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  border-radius: 20px;
  box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

const TextWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
`;

const SocialLoginsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLoginButtonWrapper = styled.a`
  font-size: 25px;
  color: #3b5998;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  margin: 5px;
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const LoginForm: React.FC = () => {
  return (
    <>
      <FormWrapper>
        <TitleWrapper>
          <Title>Login</Title>
        </TitleWrapper>
        <InputWrapper>
          <Input placeholder="username or email" />
          <FocusInput />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder="password" />
          <FocusInput />
        </InputWrapper>
        <LoginButtonWrapper>
          <Button>Login</Button>
        </LoginButtonWrapper>
        <TextWrapper>
          <span>Or login with</span>
        </TextWrapper>
        <SocialLoginsWrapper>
          <SocialLoginButtonWrapper>
            <FaFacebookF />
          </SocialLoginButtonWrapper>
          <SocialLoginButtonWrapper>
            <FaGoogle />
          </SocialLoginButtonWrapper>
        </SocialLoginsWrapper>
      </FormWrapper>
    </>
  );
};
