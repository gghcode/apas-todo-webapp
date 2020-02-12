import React from 'react';
import { UserUsecase } from '@/domain/user';
import { TodoUsecase } from '@/domain/todo';
import { AuthUsecase } from '@/domain/auth';
import { TodoApi, AuthApi } from '@/infrastructures/api';
import { FetchAgent } from '@/infrastructures/nativeAgent';
// import { TokenContainer } from '@/domain/auth/usecase';
import { WindowLocalStorage } from '@/infrastructures/windowLocalStorage';

const createUsecase = () => {
  // const agent: any = {};
  // const tokenContainer = new TokenContainer();
  const agent = new FetchAgent();

  const userUsecase = new UserUsecase();
  const todoUsecase = new TodoUsecase(new TodoApi(agent));
  const authUsecase = new AuthUsecase(
    new AuthApi(agent),
    new WindowLocalStorage()
  );

  return {
    userUsecase,
    todoUsecase,
    authUsecase,
  };
};

type TUsecase = ReturnType<typeof createUsecase>;

const usecaseContext = React.createContext<TUsecase | null>(null);

export const useUsecase = () => {
  const domain = React.useContext(usecaseContext);
  if (!domain) {
    throw new Error('useUsecase must be used within a UsecaseProvider');
  }

  return domain;
};

export const UsecaseProvider: React.FC = ({ children }) => {
  const usecase = createUsecase();

  return (
    <usecaseContext.Provider value={usecase}>
      {children}
    </usecaseContext.Provider>
  );
};