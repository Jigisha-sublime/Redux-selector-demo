import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../utils/index';
// import ThemeSwitcher from '../components/Other/ThemeSwitcher'

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLogin ?
        <Fragment>
          {/* <ThemeSwitcher /> */}
          <Component {...props} />
        </Fragment>
        : <Redirect to="/login" />
    )}
  />
);

export default PrivateRoutes;
