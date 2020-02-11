import * as React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Home, Login } from '@/pages';
import RequiredLogInRoute from './requiredLogInRoute';
import RedirectIfLoggedInRoute from './redirectIfLoggedInRoute';

const Router = (
  <div>
    <BrowserRouter>
      <Switch>
        <RequiredLogInRoute path="/todos" component={observer(Home)} />
        <Redirect exact from="/" to="/todos" />
        <RedirectIfLoggedInRoute
          path="/login"
          to="/"
          component={observer(Login)}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
