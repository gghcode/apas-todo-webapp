import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';

interface Props extends RouteComponentProps<any> {}

export const Login: React.FC<Props> = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChangedForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const { history } = props;
  const { authStore } = useStore();

  const handleLoginFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = form;
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
              onChange={handleChangedForm}
              className="input-login-form form-control"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChangedForm}
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
