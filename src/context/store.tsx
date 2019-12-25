import React from 'react';
import { useLocalStore } from 'mobx-react';
import { AuthStore } from '@/stores/authStore';
import { LocalStorage } from '@/infrastructures/localStorage';
import { AuthApi } from '@/api/auth';
import { UserStore } from '@/stores/userStore';
import { UserApi } from '@/api/user';
import { AuthInteractor } from '@/domain/auth/interactor';
import { UserInteractor } from '@/domain/user/interactor';
import { TodoInteractor } from '@/domain/todo/interactor';
import { TodoStore } from '@/stores/todoStore';
import { TodoApi } from '@/api/todo';
import { KeyValueStorage } from '@/domain/persist/storage';
import { ApiAgent } from '@/infrastructures/agent';
import { NativeAgent } from '@/infrastructures/nativeAgent';

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
  const agent: ApiAgent = new NativeAgent();

  const localStorage: KeyValueStorage = new LocalStorage();
  const authStore: AuthInteractor = new AuthStore(
    new AuthApi(agent),
    localStorage
  );
  const userStore: UserInteractor = new UserStore(new UserApi());
  const todoStore: TodoInteractor = new TodoStore(new TodoApi());

  return {
    authStore,
    userStore,
    todoStore,
  };
};

type TStore = ReturnType<typeof createStore>;
