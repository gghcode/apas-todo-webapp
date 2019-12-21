import { TokenStorage } from '@/domain/auth/interactor';

const TOKEN_KEY = 'access_token';

export class WebLocalStorage implements TokenStorage {
  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string): void {
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  destroyToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  }
}
