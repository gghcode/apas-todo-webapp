import React from 'react';
import { useLocalStore } from 'mobx-react';
import { AuthStore } from '@/stores/AuthStore';
import { WebLocalStorage } from '@/infrastructures/WebLocalStorage';
import { AuthApi } from '@/api/auth';
import { UserStore } from '@/stores/UserStore';
import { UserApi } from '@/api/user';
import { AuthInteractor, TokenStorage } from '@/domain/auth/interactor';
import { UserInteractor } from '@/domain/user/interactor';

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
  const localStorage: TokenStorage = new WebLocalStorage();
  const authStore: AuthInteractor = new AuthStore(new AuthApi(), localStorage);
  const userStore: UserInteractor = new UserStore(new UserApi(), localStorage);

  return {
    authStore: authStore,
    userStore: userStore,
  };
};

type TStore = ReturnType<typeof createStore>;
