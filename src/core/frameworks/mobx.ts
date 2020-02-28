import { AuthStore } from '../adapters/mobx/authStore';
import { FetchAgent } from './gateway/fetchAgent';
import { RestAuthGateway } from './gateway';
import { LocalStorage } from './storage/localStorage';
import { AuthService } from '@/core/domain/auth';

export const configureStores = () => {
  const agent = new FetchAgent();
  const localStorage = new LocalStorage();
  const authStore = new AuthStore(new AuthService(new RestAuthGateway(agent)));

  return {
    authStore,
  };
};
