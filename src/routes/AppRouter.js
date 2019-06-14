import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ZoneTracker from '../components/ZoneTracker';
import Directory from '../components/Directory';

export const history = createHistory();

const AppRouter = () => (
  <div>
    <Header />
    <Router history={history}>
      <div className="ui container">
        <Nav />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          {/* <Route path="/announcements" component={} /> */}
          <Route path="/zones" component={ZoneTracker} />
          <Route path="/directory" component={Directory} />
          {/* <Route path="/[]/[]/:id" component={} />
          <Route path="/[]/[]/:id" component={} /> */}
        </Switch>
      </div>
    </Router>
  </div>
);

export default AppRouter;