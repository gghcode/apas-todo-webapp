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

    const { username, password } = loginForm.form;
    if (!isValidLoginForm(loginForm.form)) {
      return;
    }

    const err = await authStore.login({ username, password });
    if (err !== undefined) {
      showMessage('invalid login failed');
    }
  };

  return (
    <PageContainer>
      <WindowContainer>
        <LoginForm />
      </WindowContainer>
      {/* <div className="login-form">
        <h2 className="app-title-h2">APAS TODO</h2>
        <form onSubmit={handleLoginFormSubmit}>
          <div className="form-group">
            <input
              name="username"
              placeholder="Username"
              onChange={loginForm.handleChanged}
              className="input-login-form form-control"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={loginForm.handleChanged}
              className="input-login-form form-control"
            />
          </div>

          <button type="submit" className="btn-login-form btn btn-primary">
            Login
          </button>
        </form>
      </div> */}
    </PageContainer>
  );
};

const isValidLoginForm = (form: LoginFormType): boolean => {
  const { username, password } = form;
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
  const [form, setForm]: [LoginFormType, any] = useState({
    username: '',
    password: '',
  });

  return {
    form,
    handleChanged: (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    },
  };
};

const showMessage = (msg: string) => {
  console.log('LOGIN FAILED', msg);
};
