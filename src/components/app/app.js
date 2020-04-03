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
      isLoggedIn: false,
      usernameWelcome: 'Guest',
      data: errors
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

/* 
saveError = (errorObj) => {
  saveFunc(errorObj);
}

*/

  saveError = (event) => {
    event.preventDefault();  

    let date = new Date();
    let optionsDate = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    let dateString = date.toLocaleString("ru", optionsDate);
      const newError = {
        id: this.maxId++, 
        date: dateString, 
        error_name: this.state.error_name,
        error_description: this.state.error_description,
        user: this.state.username, 
        status: this.state.status,
        priority: this.state.priority,
        seriousness: this.state.seriousness,
        current: true, 
    }
    console.log('state', this.state);

    this.setState(({ data }) => {
      const newArr = [
        ...data,
        newError
      ];

      console.log('newArr', [...newArr]);
  
      return {
        data: [...newArr]
      };

    })
  };

  render() {
    const { isLoggedIn, username, usernameWelcome, data } = this.state;
    return (
      <Router>
        <Header onLogout={ this.onLogout }  username={ usernameWelcome }/>
        <Switch>
          <Route path="/login"
                  render={() => <LoginForm 
                            isLoggedIn={ isLoggedIn } 
                            onLogin={ this.onLogin } 
                            username={ username }
                            onUsernameChange={ this.onUsernameChange} /> } />
          <Route path="/error/:id" 
                render={({ match }) => {
                let { id } = match.params;
                id = +id;
                return <EditError isLoggedIn={ isLoggedIn } errorId={ id } saveError={ this.saveError } onErrorChange={ this.onErrorChange }/> 
                }} />
          <Route path="/new_error" 
                render={() => <ErrorForm isLoggedIn={ isLoggedIn } errorValue={ {} } saveError={ this.saveError } onErrorChange={ this.onErrorChange } />} />
          <Route path="/kanban" 
                render={() => <Kanban isLoggedIn = { isLoggedIn } data={ data }/>} />
          <Route path="/" component={ Kanban } />
        </Switch>
      </Router>
    );
  }
};
