import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { PrivateRoute } from '@/components/auth';
import { useStore } from './context/store';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute
            path="/"
            auth={useStore().authStore}
            component={observer(Home)}
          />
          <Route path="/login" component={observer(Login)} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
