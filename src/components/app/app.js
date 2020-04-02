import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import ErrorForm from '../error-form';
import EditError from '../edit-error';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

import './app.css'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      usernameWelcome: 'Guest'
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
      username: 'Guest'
    });
  };

  render() {
    const { isLoggedIn, username, usernameWelcome } = this.state;
    return (
      <Router>
        <Header onLogout={ this.onLogout }  username={ usernameWelcome }/>
        <Switch>
          <Route 
            path="/login"
            render={() => <LoginForm 
                            isLoggedIn={ isLoggedIn } 
                            onLogin={ this.onLogin } 
                            username={ username }
                            onUsernameChange={ this.onUsernameChange} /> } />
          <Route path="/new_error" 
          render={() => <EditError isLoggedIn={ isLoggedIn } errorId={3}/>} />
          {/* <Route path="/new_error" render={() => <ErrorForm isLoggedIn={ isLoggedIn } />} /> */}
          <Route path="/kanban" 
                render={() => <Kanban isLoggedIn = { isLoggedIn } />} />
          <Route path="/" component={ Kanban } />
        </Switch>
      </Router>
    );
  }
};
