import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { clearLocalStorage } from '../helpers';
import { HeaderStyles } from './styling/header.style';

const Header = ({ loading }) => {
  const classes = HeaderStyles();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            OpenSkys React
          </Typography>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            onClick={() => clearLocalStorage()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {loading && <LinearProgress />}
    </React.Fragment>
  );
};

export default Header;
