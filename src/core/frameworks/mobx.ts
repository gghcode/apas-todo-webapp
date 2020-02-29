import { AuthStore } from '../adapters/mobx/authStore';
import { FetchAgent } from './gateway/fetchAgent';
import { RestAuthGateway } from './gateway';
import { LocalStorage } from './storage/localStorage';
import { AuthService } from '@/core/domain/auth';
import { Context } from './gateway/context';

export const configureStores = () => {
  const appContext = new Context();

  const agent = new FetchAgent();
  const localStorage = new LocalStorage();
  const authStore = new AuthStore(
    new AuthService(new RestAuthGateway(agent, appContext))
  );

  return {
    authStore,
  };
};
