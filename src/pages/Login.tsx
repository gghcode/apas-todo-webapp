import React, { useState } from 'react';
import './Login.css';
import { useStore } from '@/stores';
import { RouteComponentProps } from 'react-router-dom';

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
      alert('username is required');
      return;
    }

    if (password === '') {
      alert('password is required');
      return;
    }

    const res = await authStore.login({ username, password });
    if (res.error) {
      alert(res.error.message);
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
