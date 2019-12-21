import { AuthStore, AuthUsecaseInteractor } from '@/stores/AuthStore';

export default class RootStore {
  static instance: RootStore;

  authStore: AuthUsecaseInteractor = new AuthStore();
}
