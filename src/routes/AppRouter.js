import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';

export const history = createHistory();

const AppRouter = () => (
  <div>
    <Router history={history}>
      <div className="ui container">
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          {/* <Route path="/[]/" component={} />
          <Route path="/[]/[]/:id" component={} /> */}
        </Switch>
      </div>
    </Router>
  </div>
);

export default AppRouter;