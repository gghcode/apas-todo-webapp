import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
