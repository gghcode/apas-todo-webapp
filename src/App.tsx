import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            component={inject('authStore')(observer(Login))}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
