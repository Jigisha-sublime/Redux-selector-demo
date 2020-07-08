import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLogin from '../utils/index'

const PrivateRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isLogin ? <Component {...props} /> : <Redirect to="/login" />
    )}>
    </Route>
  )
}

export default PrivateRoutes
