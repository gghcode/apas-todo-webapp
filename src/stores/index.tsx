import React from 'react';
import { useLocalStore } from 'mobx-react';
import RootStore from './RootStore';

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};

const storeContext = React.createContext<TStore | null>(null);
const createStore = () => {
  const store = new RootStore();
  return {
    authStore: store.authStore,
  };
};

type TStore = ReturnType<typeof createStore>;
