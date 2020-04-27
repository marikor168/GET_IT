import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import ErrorForm from '../error-form';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

// if you want to try this app with test data don't forget import this
// import { errors } from './data';

import './app.css'; 

// If localStorage is initially empty, then add the first record so that there is no error
// This entry will not be visible
if(localStorage.getItem('errors') === null) {
  localStorage.setItem('errors', JSON.stringify([{id: 0}]));
}
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      // This is test data
      // data: errors,
    };
  }

  onLogin = (event) => {
    event.preventDefault();
    
    this.setState({
      isLoggedIn: true
    });
    localStorage.setItem('username', this.state.username);
  };

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };  

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
    localStorage.setItem('username', 'Guest');
  };

  saveError = (event, newError) => {
    event.preventDefault();
    const data = JSON.parse(localStorage.errors);

    data.forEach((error) => {
      if(error.id === newError.id) {
        error.current = false;
      }
    });

    const newArr = [
      ...data,
      newError
    ];

    localStorage.setItem('errors', JSON.stringify(newArr));
  };

  componentDidMount() {
    localStorage.setItem('username', 'Guest');
  };

  render() {
    const { isLoggedIn, username } = this.state;

    // !!!! If you want to try with a test array of errors, you need to load it into localStorage
    // localStorage.setItem('errors', JSON.stringify(this.state.data));

    const usernameWelcome = isLoggedIn ? localStorage.getItem('username') : 'Guest';

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
          <Route exact path="/error/:id"
                render={({ match }) => {
                  const data = JSON.parse(localStorage.errors);
                  let { id } = match.params;
                  id = +id;
                  const elements = data.filter((error) => error.id === id);
                  const errorValue = elements.filter((error) => error.current === true)[0];
                  return (
                    <ErrorForm 
                    key={ id }
                    isLoggedIn={ isLoggedIn } 
                    saveError={ this.saveError }
                    errorValue={ errorValue }
                    errorHistory={ elements } />
                  )
                }} />
          <Route exact path="/new_error"
                render={() => (
                <ErrorForm 
                  isLoggedIn={ isLoggedIn } 
                  saveError={ this.saveError }
                  errorValue={ {} }
                  errorHistory={ [] } />
                )} />
          <Route path="/kanban" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn }
                  />)} />
          <Route path="/" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn }
                  />)} />
        </Switch>
      </Router>
    );
  }
};
