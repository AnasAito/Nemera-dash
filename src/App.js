import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Targets from './screens/targets';
import Spotlight from './screens/spotlight';

const App = () => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/spotlight/:id">
          <Spotlight />
        </Route>

        <Route path="/targets">
          <Targets />
        </Route>
        <Route path="/">
          <Targets />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
