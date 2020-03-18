import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { LoginForm } from '@/components/organisms/LoginForm';
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

interface LoginFormType {
  readonly username: string;
  readonly password: string;
}

export const Login: React.FC = () => {
  const loginForm = useForm();
  const { authStore } = useStore();

  const handleLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidLoginFormData(loginForm.data)) {
      return;
    }

    const err = await authStore.login({ ...loginForm.data });
    if (err !== undefined) {
      showMessage('invalid login failed');
    }
  };

  return (
    <PageContainer>
      <WindowContainer>
        <LoginForm
          handleFormChanged={loginForm.handleChanged}
          handleFormSubmitted={handleLoginFormSubmit}
        />
      </WindowContainer>
    </PageContainer>
  );
};

const isValidLoginFormData = (data: LoginFormType): boolean => {
  const { username, password } = data;
  if (username === '') {
    showMessage('username is required');
    return false;
  }

  if (password === '') {
    showMessage('password is required');
    return false;
  }

  return true;
};

const useForm = () => {
  const [data, setData]: [LoginFormType, any] = useState({
    username: '',
    password: '',
  });

  return {
    data,
    handleChanged: (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    },
  };
};

const showMessage = (msg: string) => {
  console.log('LOGIN FAILED', msg);
};
