import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import ErrorForm from '../error-form';
import EditError from '../edit-error';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

import { errors } from './data';

import './app.css'; 

export default class App extends Component {

  constructor(props) {
    super(props);
    this.maxId = 20;
    this.state = {
      isLoggedIn: true,
      usernameWelcome: 'Guest',
      data: errors,
      isErrorSaved: false
    };
  }

  onLogin = (event) => {
    event.preventDefault();

    this.setState({
      isLoggedIn: true,
      usernameWelcome: this.state.username
    });
  };

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
      usernameWelcome: 'Guest'
    });
  };

  onErrorChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  saveNewError = (event) => {
    event.preventDefault(); 

    // const id = errId !== undefined ? errId : this.maxId++;
    // console.log('id', id);

    const newError = {
      id: this.maxId++,
      date: setDate(), 
      error_name: this.state.error_name,
      error_description: this.state.error_description,
      user: this.state.username, 
      status: this.state.status,
      priority: this.state.priority,
      seriousness: this.state.seriousness,
      current: true, 
    }
      
    this.setState(({ data }) => {
      const newArr = [
        ...data,
        newError
      ];

      return {
        data: newArr,
        isErrorSaved: true
      };
    });

  };

  saveError = (event, errId) => {
    const { data } = this.state;
    event.preventDefault();  

    const id = errId !== undefined ? errId :  this.maxId++;
    console.log('id', id);

    const newError = {
      id: id, 
      date: setDate(), 
      error_name: this.state.error_name,
      error_description: this.state.error_description,
      user: this.state.username, 
      status: this.state.status,
      priority: this.state.priority,
      seriousness: this.state.seriousness,
      current: true, 
  }

    data.forEach((error) => {
      if(error.id === newError.id) {
        error.current = false;
      }
    });

    this.setState(({ data }) => {
      const newArr = [
        ...data,
        newError
      ];

      return {
        data: newArr
      };
    });
  };

  render() {
    const { isLoggedIn, username, usernameWelcome, data, isErrorSaved } = this.state;
    return (
      <Router>
        <Header onLogout={ this.onLogout }  username={ usernameWelcome }/>
        <Switch>
          <Route path="/login"
                render={() => (
                <LoginForm 
                  isLoggedIn={ isLoggedIn } 
                  onLogin={ this.onLogin } 
                  username={ username }
                  onUsernameChange={ this.onUsernameChange} />)} />
          <Route path="/error/:id" 
                render={({ match }) => {
                let { id } = match.params;
                id = +id;
                return (
                  <EditError 
                    isLoggedIn={ isLoggedIn } 
                    errorId={ id } 
                    saveError={ (e) => this.saveError(e, id) } 
                    onErrorChange={ this.onErrorChange } 
                    data={ data }
                  /> 
                )}} />
          <Route path="/new_error" 
                render={() => (
                <ErrorForm 
                  isLoggedIn={ isLoggedIn } 
                  errorValue={ {} } 
                  saveError={ this.saveNewError } 
                  onErrorChange={ this.onErrorChange }
                  isErrorSaved={ isErrorSaved }/>)} />
          <Route path="/kanban" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn } 
                  data={ data }/>)} />
          <Route path="/" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn } 
                  data={ data }/>)} />
        </Switch>
      </Router>
    );
  }
};

function setDate() {
  const date = new Date();
    const optionsDate = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
  const dateString = date.toLocaleString("ru", optionsDate);
  return dateString;
};
