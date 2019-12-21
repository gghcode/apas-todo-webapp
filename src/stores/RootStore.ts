import { AuthStore } from '@/stores/AuthStore';
import { AuthInteractor } from '@/domain/auth/interactor';
import { WebLocalStorage } from '@/infrastructures/WebLocalStorage';

export default class RootStore {
  authStore: AuthInteractor = new AuthStore(new WebLocalStorage());
}
