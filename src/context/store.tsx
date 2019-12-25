import React from 'react';
import { useLocalStore } from 'mobx-react';
import { LocalStorage } from '@/infrastructures/localStorage';
import { UserStore, AuthStore, TodoStore } from '@/stores';
import { ApiAgent } from '@/infrastructures/agent';
import { NativeAgent } from '@/infrastructures/nativeAgent';
import {
  AuthInteractor,
  UserInteractor,
  TodoInteractor,
  KeyValueStorage,
} from '@/domain';
import { AuthApi, UserApi, TodoApi } from '@/api';
import { TokenContainer } from '@/domain/auth/interactor';

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

const storeContext = React.createContext<TStore | null>(null);
const createStore = () => {
  const tokenContainer = new TokenContainer();
  const agent: ApiAgent = new NativeAgent(tokenContainer);

  const localStorage: KeyValueStorage = new LocalStorage();
  const authStore: AuthInteractor = new AuthStore(
    tokenContainer,
    new AuthApi(agent),
    localStorage
  );
  const userStore: UserInteractor = new UserStore(new UserApi(agent));
  const todoStore: TodoInteractor = new TodoStore(new TodoApi(agent));

  return {
    authStore,
    userStore,
    todoStore,
  };
};

type TStore = ReturnType<typeof createStore>;
