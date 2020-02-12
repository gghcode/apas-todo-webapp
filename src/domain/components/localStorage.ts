export interface LocalStorage {
  get(key: string): string | null;
  set(key: string, value: string): void;
  unset(key: string): void;
  clear(): void;
}
