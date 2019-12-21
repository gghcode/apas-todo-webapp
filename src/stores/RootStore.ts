import { AuthStore } from '@/stores/AuthStore';
import { AuthInteractor } from '@/domain/auth/interactor';
import { WebLocalStorage } from '@/infrastructures/WebLocalStorage';
import { AuthService } from '@/api/auth';

export default class RootStore {
  authStore: AuthInteractor = new AuthStore(
    new AuthService(),
    new WebLocalStorage()
  );
}
