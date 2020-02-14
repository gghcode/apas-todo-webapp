import React from 'react';
import { useLocalStore } from 'mobx-react';
import { configureStores } from '@/core/frameworks/mobx';

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(configureStores);
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

type TStore = ReturnType<typeof configureStores>;
