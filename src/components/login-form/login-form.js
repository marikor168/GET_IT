import React from 'react';
import { Redirect } from 'react-router-dom';

// import Input from '../input/';
// import MyButton from '../button/';
import FormItem from '../form-item';
import BasicForm from '../basic-form/';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Input, InputLabel, TextField } from '@material-ui/core';

import './login-form.css';

const useStyles = makeStyles({
  item: {
    margin: '20px 0',
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
                  classNameLegend="loginForm__legend"
                  value="Вход в систему"
                  onSubmit={ onLogin }>
        {/* <FormItem> */}
          {/* <Input 
            type="text" 
            name="username" 
            placeholder="Пользователь"
            onChange={ onUsernameChange }
            required/> */}
            {/* <InputLabel htmlFor="username">
              Пользователь
            </InputLabel> */}
            <div className="wrapperInputs">
           {/* <FormItem> */}
            <TextField 
            // variant="outlined"
            // label="Required"
              id="username"
              type="text"
              name="username"
              placeholder="Пользователь"
              onChange={ onUsernameChange }
              className={classes.item}
              required
            />
        {/* </FormItem> */}

        {/* <FormItem> */}
          {/* <Input type="password" name="password" placeholder="Пароль" required/> */}
          
          <TextField  
          // variant="outlined"
          // label="Required"
          type="password"
              name="password"
              placeholder="Пароль"
              // label="Пароль"
              className="item"
              required
            />
            
        {/* </FormItem> */}
            </div>

        {/* <MyButton value='Войти'/> */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Войти
        </Button>
      </BasicForm>

    </div>
  );
};

export default LoginForm;