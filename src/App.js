import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ROUTES from './constants/routes';
import Profile from './pages/profile';
import Diary from './pages/diary';
import Test from './pages/test';
import Login from './pages/login';
import Register from './pages/register';
import Navi from './components/bottom-navigation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.login}>
          <Login />
        </Route>
        <Route path={ROUTES.register}>
          <Register />
        </Route>
        <Route path={ROUTES.profile}>
          <Profile />
          <Navi/>
        </Route>
        <Route path={ROUTES.diary}>
          <Diary />
          <Navi/>
        </Route>
        <Route path={ROUTES.test}>
          <Test />
          <Navi/>
        </Route>
        <Route path={ROUTES.root}>
          <Redirect to={ROUTES.login} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
