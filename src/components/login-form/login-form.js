import React from 'react';

import Input from '../input/';
import Button from '../button/';
import FormItem from '../form-item';
import BasicForm from '../basic-form/';

import './login-form.css';

const LoginForm = () => {
  return(
    
    <BasicForm classNameFieldset="loginForm__wrapper"
                classNameLegend="loginForm__legend"
                value="Вход в систему">
      <FormItem>
        <Input type="text" name="login" placeholder="Пользователь" required/>
      </FormItem>

      <FormItem>
        <Input type="password" name="password" placeholder="Пароль" required/>
      </FormItem>

      <Button value='Войти'/>
    </BasicForm>
  );
};

export default LoginForm;