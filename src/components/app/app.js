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
      isLogged: false
    };
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={ LoginForm } />
          <Route exact path="/new_error">
            <ErrorForm />
            <Table />
          </Route>
          <Route exact path="/kanban" component={ Kanban } />
          <Route path="/" component={ LoginForm } />
        </Switch>
      </Router>
    );
  }
};
