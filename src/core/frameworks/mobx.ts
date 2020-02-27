import { AuthStore } from '../adapters/mobx/authStore';
import { FetchAgent } from './agent/fetchAgent';
import { RestAuthGateway } from './gateway';
import { WindowLocalStorage } from './storage/windowLocalStorage';
import { AuthService } from '@/core/domain/auth';

export const configureStores = () => {
  const agent = new FetchAgent();
  const localStorage = new WindowLocalStorage();
  const authStore = new AuthStore(new AuthService(new RestAuthGateway(agent)));

  return {
    authStore,
  };
};
