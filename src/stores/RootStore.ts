import { AuthStore } from '@/stores/AuthStore';
import { AuthInteractor, TokenStorage } from '@/domain/auth/interactor';
import { WebLocalStorage } from '@/infrastructures/WebLocalStorage';
import { AuthService } from '@/api/auth';
import { UserInteractor } from '@/domain/user/interactor';
import { UserStore } from './UserStore';
import { UserApi } from '@/api/user';

const localStorage: TokenStorage = new WebLocalStorage();

export default class RootStore {
  authStore: AuthInteractor = new AuthStore(new AuthService(), localStorage);
  userStore: UserInteractor = new UserStore(new UserApi(), localStorage);
}
