import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = (props) => {
  const loginForm = useForm();
  const { authStore } = useStore();
  const { history } = props;

  const handleLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = loginForm.form;
    if (username === '') {
      toast('username is required', {
        autoClose: 1000,
      });
      return;
    }

    if (password === '') {
      toast('password is required', {
        autoClose: 1000,
      });
      return;
    }

    const res = await authStore.login({ username, password });
    if (res.error) {
      toast(res.error.message, {
        autoClose: 1000,
      });
      return;
    }

    toast('hi!', {
      autoClose: 1000,
    });

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
