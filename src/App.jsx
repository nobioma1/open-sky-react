import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AuthRoute, Protected } from './components/Protected';
import Home from './components/Home';

export default () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <AuthRoute path="/" component={Login} />
        <Protected path="/home" component={Home} />
      </BrowserRouter>
    </React.Fragment>
  );
};
