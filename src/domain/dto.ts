export interface TaskResult<T> {
  readonly data?: T;
  readonly error?: any;
}

export type Result<T, U> = [T?, U?];
