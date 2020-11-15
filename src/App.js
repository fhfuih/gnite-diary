import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.login}>
          <div>Log in page</div>
        </Route>
        <Route path={ROUTES.register}>
          <div>register page</div>
        </Route>
        <Route path={ROUTES.profile}>
          <div>profile page</div>
        </Route>
        <Route path={ROUTES.diary}>
          <div>diary page</div>
        </Route>
        <Route path={ROUTES.test}>
          <div>test page</div>
        </Route>
        <Route path={ROUTES.root}>
          <Redirect to={ROUTES.login} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
