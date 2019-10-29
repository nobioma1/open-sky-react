import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkUser } from '../helpers';

export const Protected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = checkUser();
      if (!currentUser) {
        return <Redirect to="/" />;
      }

      return <Component {...props} />;
    }}
  />
);

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = checkUser();
      if (currentUser) {
        return <Redirect to="/home" />;
      }

      return <Component {...props} />;
    }}
  />
);
