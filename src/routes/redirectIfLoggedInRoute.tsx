import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/context/store';

const RedirectIfLoggedInRoute = ({
  component: Component,
  to,
  ...rest
}: any) => {
  const { authStore } = useStore();
  authStore.loginIfHasTokenInLocal();

  return (
    <Route {...rest}>
      {!authStore.authenticated ? <Component /> : <Redirect to={to} />}
    </Route>
  );
};

export default observer(RedirectIfLoggedInRoute);
