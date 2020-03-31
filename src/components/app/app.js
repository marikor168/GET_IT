import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import ErrorForm from '../error-form';
import Table from '../table';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

import './app.css'; 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: 'Guest'
    };
  }

  onLogin = (event) => {
    event.preventDefault();

    this.setState({
      isLoggedIn: true,
      username: this.state.username
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
    const { isLoggedIn, username } = this.state;
    return (
      <Router>
        <Header onLogout={ this.onLogout }  username={ username }/>
        <Switch>
          <Route 
            path="/login"
            render={() => <LoginForm 
                            isLoggedIn={ isLoggedIn } 
                            onLogin={ this.onLogin } 
                            username={ username }
                            onUsernameChange={ this.onUsernameChange} /> }
          >
          </Route>  
          <Route exact path="/errors/:id">
            <ErrorForm isLoggedIn={ isLoggedIn }/>
            <Table />
          </Route>
          <Route path="/kanban" 
                render={() => <Kanban isLoggedIn = { isLoggedIn } />} />
          <Route path="/" component={ Kanban } />
        </Switch>
      </Router>
    );
  }
};
