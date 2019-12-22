import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '@/context/store';

export const PrivateRoute = ({ component: Component, auth, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
