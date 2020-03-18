import React, { useState } from 'react';
import { useStore } from '@/context/store';
import { LoginForm } from '@/components/organisms/LoginForm';
import { FormPageTemplate } from '@/components/templates/FormPageTemplate';

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

  const loginFormComponent = (
    <LoginForm
      handleFormChanged={loginForm.handleChanged}
      handleFormSubmitted={handleLoginFormSubmit}
    />
  );

  return <FormPageTemplate form={loginFormComponent} />;
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
