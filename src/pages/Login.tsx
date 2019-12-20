import React, { useState } from 'react';
import './Login.css';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === '') {
      alert('username is required');
    }

    if (password === '') {
    }
    console.log(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="app-title-h2">APAS TODO</h2>
        <form onSubmit={onLoginFormSubmit}>
          <div className="form-group">
            <input
              placeholder="Please input username"
              onChange={(e) => setUsername(e.target.value)}
              className="input-login-form form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Please input password"
              onChange={(e) => setPassword(e.target.value)}
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
