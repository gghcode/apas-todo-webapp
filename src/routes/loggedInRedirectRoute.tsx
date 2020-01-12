import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/context/store';

const LoggedInRedirectRoute = ({ component: Component, ...rest }: any) => {
  const { authStore } = useStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        !authStore.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default observer(LoggedInRedirectRoute);
