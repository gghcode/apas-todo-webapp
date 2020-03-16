import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { LoginForm } from '@/components/organisms/LoginForm';
import { LoginImage } from '@/components/atoms/LoginImage';
import styled from 'styled-components';

const PageContainer = styled.div`
  /* width: 100%; */
  height: 100vh;
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const WindowContainer = styled.div`
  border-radius: 10px;
  background-color: #e74c3c;

  padding: 177px 130px 33px 95px;
  width: 760px;

  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LoginImageWrapper = styled.div`
  width: 316px;
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
        <LoginImageWrapper>
          <LoginImage src="/images/img-01.png" />
        </LoginImageWrapper>
        <LoginForm />
      </WindowContainer>
      {/* <LoginForm /> */}
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
