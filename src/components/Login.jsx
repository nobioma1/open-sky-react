import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { loginStyles } from './styling/login.style';
import { setLoggedIn } from '../helpers';

const Login = ({ history }) => {
  const classes = loginStyles();
  const [userInfo, updateUserInfo] = useState({ username: '', password: '' });
  const [error, updateError] = useState('');

  const onChangeHandler = ({ target }) => {
    updateError('');
    updateUserInfo(prev => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (userInfo.username === 'demo' && userInfo.password === 'demo') {
      setLoggedIn();
      history.push('/home');
    } else {
      updateError('Invalid Username and Password');
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        container
        spacing={0}
        justify="center"
      >
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Welcome, <br />
            Login to your Account
          </Typography>
          <form onSubmit={onSubmitHandler} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              label="Username"
              name="username"
              value={userInfo.username}
              onChange={e => onChangeHandler(e)}
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              label="Password"
              type="password"
              value={userInfo.password}
              onChange={e => onChangeHandler(e)}
              required
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Typography
              variant="body1"
              align="center"
              color="secondary"
              gutterBottom
            >
              {error}
            </Typography>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
