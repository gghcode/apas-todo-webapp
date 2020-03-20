import * as React from 'react';
import styled from 'styled-components';
import { Title } from '@/components/atoms/Title';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { RedirectButton } from '@/components/atoms/RedirectButton';

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

interface Props {
  handleFormChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmitted: (e: React.FormEvent) => Promise<void>;
}

export const LoginForm: React.FC<Props> = (props: Props) => {
  const { handleFormChanged, handleFormSubmitted } = props;

  return (
    <>
      <FormWrapper onSubmit={handleFormSubmitted}>
        <TitleWrapper>
          <Title>Login</Title>
        </TitleWrapper>
        <InputWrapper>
          <Input
            name="username"
            placeholder="username or email"
            onChange={handleFormChanged}
          />
          <FocusInput />
        </InputWrapper>
        <InputWrapper>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleFormChanged}
          />
          <FocusInput />
        </InputWrapper>
        <LoginButtonWrapper>
          <Button type="submit">Login</Button>
        </LoginButtonWrapper>
        <TextWrapper>
          <span>Or login with</span>
        </TextWrapper>
        <SocialLoginsWrapper>
          <RedirectButton href="www.facebook.com">
            <FaFacebookF />
          </RedirectButton>
          <RedirectButton href="www.google.com">
            <FaGoogle />
          </RedirectButton>
        </SocialLoginsWrapper>
      </FormWrapper>
    </>
  );
};
