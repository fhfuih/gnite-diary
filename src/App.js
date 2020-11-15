import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4B6A50'
    },
    secondary: {
      main: '#EEE1C1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
