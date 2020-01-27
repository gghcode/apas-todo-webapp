import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/context/store';

const LoggedInRedirectRoute = ({ component: Component, ...rest }: any) => {
  const { authStore } = useStore();
  // console.log(authStore.authenticated);
  return (
    <Route {...rest}>
      {!authStore.authenticated ? <Component /> : <Redirect to="/" />}
    </Route>
  );
};

export default observer(LoggedInRedirectRoute);
