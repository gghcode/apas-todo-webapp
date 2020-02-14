import { observable, action } from 'mobx';

export class AuthStore {
  @observable
  authenticated: boolean = false;

  @action
  sessionLogin() {
    this.authenticated = true;
  }

  @action
  sessionLogout() {
    this.authenticated = false;
  }
}
