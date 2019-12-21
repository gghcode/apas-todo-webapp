import * as React from 'react';
import { Provider } from 'mobx-react';
import RootStore from './RootStore';

interface IStoreProviderProps {}

const rootStore = new RootStore();
const StoreProvider: React.FC<IStoreProviderProps> = ({ children }) => {
  return <Provider {...rootStore}>{children}</Provider>;
};

export default StoreProvider;
