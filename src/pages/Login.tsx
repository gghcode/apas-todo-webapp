import React, { useState } from 'react';
import { useStore } from '@/context/store';

type LoginFormType = {
  username: string;
  password: string;
};

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
      console.log(err);
      showMessage('invalid login failed');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
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
      </div>
    </div>
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
