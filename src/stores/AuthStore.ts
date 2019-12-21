import { observable } from 'mobx';

export interface AuthUsecaseInteractor {
  login(): void;
}

export class AuthStore implements AuthUsecaseInteractor {
  login(): void {
    console.log('hello');
  }
}
