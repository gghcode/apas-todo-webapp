import * as React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Home, Login } from '@/pages';
import PrivateRoute from './privateRoute';
import LoggedInRedirectRoute from './loggedInRedirectRoute';

const Router = (
  <div>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/todos" component={observer(Home)} />
        <LoggedInRedirectRoute path="/login" component={observer(Login)} />
        <Redirect exact from="/" to="/todos" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
