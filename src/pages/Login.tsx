import React, { useState, useEffect } from 'react';
import { useStore } from '@/context/store';
import { useUsecase } from '@/context/domain';
import { toast } from 'react-toastify';
import './Login.css';

type LoginFormType = {
  username: string;
  password: string;
};

export const Login: React.FC = () => {
  const loginForm = useForm();
  const { authStore } = useStore();
  const { authInteractor } = useUsecase();

  const handleLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = loginForm.form;
    if (!isValidLoginForm(loginForm.form)) {
      return;
    }

    try {
      await authInteractor.login({ username, password });
    } catch (err) {
      showMessage(err.message);
      return;
    }

    authStore.sessionLogin();
  };

  useEffect(() => {
    // if (authInteractor.existsTokenInLocalStorage()) {
    //   authInteractor.useAccessToken();
    //   authStore.sessionLogin();
    // }
  }, [authInteractor, authStore]);

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
  toast(msg, { autoClose: 1000 });
};
