import React from 'react';
import { useLocalStore } from 'mobx-react';
import { UserStore, AuthStore, TodoStore } from '@/stores';

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
  const authStore = new AuthStore();
  const userStore = new UserStore();
  const todoStore = new TodoStore();

  return {
    authStore,
    userStore,
    todoStore,
  };
};

type TStore = ReturnType<typeof createStore>;
