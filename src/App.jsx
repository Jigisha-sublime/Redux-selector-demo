import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Main from './components/Other/Main';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Dashboard from './components/Other/Dashboard';
import Profile from './components/Other/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoutes component={Profile} path="/profile" exact />
          <PrivateRoutes component={Dashboard} path="/dashboard" exact />

          <PublicRoutes restricted={true} component={SignUp} path="/signup" exact />
          <PublicRoutes restricted={true} component={Login} path="/login" exact />
          <PublicRoutes restricted={false} component={Main} path="/" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
