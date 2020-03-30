import React, { Component } from 'react';

import Input from '../input/';
import Button from '../button/';
import FormItem from '../form-item';
import BasicForm from '../basic-form/';

import './login-form.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      userName: null
    };
  }

  logIn = () => {
    this.setState({
      isLogged: true
    });
    console.log(this.state.isLogged)
  };

  render() {
    const { logIn } = this.state;
      return (
        <div className="wrapper">
          <BasicForm classNameFieldset="loginForm__wrapper"
                      classNameLegend="loginForm__legend"
                      value="Вход в систему">
            <FormItem>
              <Input type="text" name="login" placeholder="Пользователь" required/>
            </FormItem>

            <FormItem>
              <Input type="password" name="password" placeholder="Пароль" required/>
            </FormItem>

            <Button onClick={ logIn } value='Войти'/>
          </BasicForm>
        </div>
      );
    }
};
