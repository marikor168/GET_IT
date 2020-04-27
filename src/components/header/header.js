import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, 
  Toolbar,
  Typography,
  Button } from '@material-ui/core';

import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: theme.spacing(2),
  },
}));

const Header = ({ onLogout, username }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Добро пожаловать, { username }!
          </Typography>
          <Button >
            <Link className={classes.button} to="/new_error">Ввод новой ошибки</Link>
          </Button>
          <Button>
            <Link className={classes.button} to="/kanban">Доска ошибок</Link>
          </Button>
          <Button onClick={ onLogout }>
            <Link className={classes.button} to="/login">Выход из системы</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;