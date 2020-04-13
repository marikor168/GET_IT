import React from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../input/';
import Button from '../button/';
import FormItem from '../form-item';
import BasicForm from '../basic-form/';

import './login-form.css';

const LoginForm = ({ isLoggedIn, onLogin, onUsernameChange }) => {

  if(isLoggedIn) {
    return <Redirect to="/kanban" />
  }

  return (
    <div className="wrapper">
      <BasicForm classNameFieldset="loginForm__wrapper"
                  classNameLegend="loginForm__legend"
                  value="Вход в систему"
                  onSubmit={ onLogin }>
        <FormItem>
          <Input 
            type="text" 
            name="username" 
            placeholder="Пользователь"
            onChange={ onUsernameChange }/>
        </FormItem>

        <FormItem>
          <Input type="password" name="password" placeholder="Пароль"/>
        </FormItem>

        <Button value='Войти'/>
      </BasicForm>
    </div>
  );
};

export default LoginForm;