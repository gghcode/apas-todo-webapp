import { LocalStorage } from '@/domain/components';

export class WindowLocalStorage implements LocalStorage {
  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  unset(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }
}
