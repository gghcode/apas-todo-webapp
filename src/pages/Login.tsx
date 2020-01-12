import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';

export const Login: React.FC = () => {
  const loginForm = useForm();
  const history = useHistory();
  const { authStore } = useStore();

  const handleLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = loginForm.form;
    if (username === '') {
      showMessage('username is required');
      return;
    }

    if (password === '') {
      showMessage('password is required');
      return;
    }

    const [_, err] = await authStore.login({ username, password });
    if (err != undefined) {
      showMessage(err.message);
      return;
    }

    showMessage('hi');

    history.push('/');
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

const useForm = () => {
  const [form, setForm] = useState({
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
