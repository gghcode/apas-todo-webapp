import React from 'react';
import { AuthService, TodoService } from '@/core/useCases';
import { TodoInteractor, AuthInteractor } from '@/core/interfaces';
import { RestTodoGateway, RestAuthGateway } from '@/core/frameworks/gateway';
import { FetchAgent } from '@/core/frameworks/agent/fetchAgent';
import { WindowLocalStorage } from '@/core/frameworks/storage/windowLocalStorage';

const createUsecase = () => {
  const agent = new FetchAgent();
  const todoInteractor: TodoInteractor = new TodoService(
    new RestTodoGateway(agent)
  );

  const authInteractor: AuthInteractor = new AuthService(
    new RestAuthGateway(agent),
    new WindowLocalStorage()
  );

  return {
    todoInteractor,
    authInteractor,
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
