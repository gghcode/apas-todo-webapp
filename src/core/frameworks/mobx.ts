import { AuthStore } from '../adapters/mobx/authStore';

export const configureStores = () => {
  const authStore = new AuthStore();

  return {
    authStore,
  };
};
