import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/context/store';

const App: React.FC = () => {
  const { authStore } = useStore();

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            authenticated={authStore.authenticated}
            component={observer(Home)}
          />
          <Route path="/login" component={observer(Login)} />
        </Switch>
      </Router>
    </div>
  );
};

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default observer(App);
