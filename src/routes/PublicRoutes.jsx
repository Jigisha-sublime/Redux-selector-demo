import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from '../utils/index';

const PublicRoutes = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLogin && restricted ? <Redirect to="/" />
        : <Component {...props} />
    )}
  />
);

export default PublicRoutes;
