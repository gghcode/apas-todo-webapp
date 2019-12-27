import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Login } from '@/pages/Login';
import { Home } from '@/pages/Home';
import PrivateRoute from './privateRoute';
import LoggedInRedirectRoute from './loggedInRedirectRoute';

const Router = (
  <div>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={observer(Home)} />
        <LoggedInRedirectRoute path="/login" component={observer(Login)} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
