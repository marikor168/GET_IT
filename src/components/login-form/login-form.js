import React from 'react';
import { Redirect } from 'react-router-dom';

import BasicForm from '../basic-form/';

import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import './login-form.css';

const useStyles = makeStyles({
  item: {
    margin: '10px 0',
    width: '100%',
  },
});

const LoginForm = ({ isLoggedIn, onLogin, onUsernameChange }) => {
  const classes = useStyles();

  if(isLoggedIn) {
    return <Redirect to="/kanban" />
  }

  return (
    <div className="wrapper">
      <BasicForm classNamePaper="loginForm__wrapper"
                value="Вход в систему"
                onSubmit={ onLogin }>

        <div className="wrapper__inputs">
          <TextField
            type="text"
            name="username"
            placeholder="Пользователь"
            onChange={ onUsernameChange }
            className={ classes.item }
            required />
          <TextField  
            type="password"
            name="password"
            placeholder="Пароль"
            className={ classes.item }
            required />
        </div>

        <Button
          variant="contained"
          color="primary"
          type="submit">Войти</Button>

      </BasicForm>
    </div>
  );
};

export default LoginForm;