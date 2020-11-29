import React, { createContext, useCallback, useState } from 'react';
import { ThemeProvider, Switch as MuiSwitch } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DayJsUtils from '@date-io/dayjs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ROUTES from './constants/routes';
import Navi from './components/bottom-navigation';
import Profile from './pages/profile';
import Diary from './pages/diary-overview';
import Write from './pages/diary-write';
import Test from './pages/test';
import Login from './pages/login';
import Register from './pages/register';
import Detail from './pages/detail';
import Plan from './pages/plan';

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

export const Context = createContext(false);

function App() {
  const [contextValue, setContextValue] = useState(false);
  const handleSwitch = useCallback((event) => {
    setContextValue(event.target.checked)
  }, []);
  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <ThemeProvider theme={theme}>
        <Context.Provider value={contextValue}>
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
              <Route path={ROUTES.write}>
                <Write />
                <Navi/>
              </Route>
              <Route path={ROUTES.test}>
                <Test />
                <Navi/>
              </Route>
              <Route path={ROUTES.detail}>
                <Detail />
                <Navi/>
              </Route>
              <Route path={ROUTES.plan}>
                <Plan />
                <Navi/>
              </Route>
              <Route path={ROUTES.root}>
                <Redirect to={ROUTES.login} />
              </Route>
            </Switch>
          </Router>
          <div style={{ position: 'fixed', top: '50vh', right: 0 }}>
            <MuiSwitch
              checked={contextValue}
              onChange={handleSwitch}
              name="context"
            />
          </div>
        </Context.Provider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
