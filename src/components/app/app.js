import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header';
import ErrorForm from '../error-form';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

import { errors } from './data';

import './app.css'; 

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      // для теста использую начальный массив ошибок
      data: errors,
      // data: [],
    };
  }

  onLogin = (event) => {
    event.preventDefault();
    
    this.setState({
      isLoggedIn: true,
      // usernameWelcome: this.state.username
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
      // usernameWelcome: 'Guest'
    });
    localStorage.setItem('username', 'Guest');
  };

  // onErrorChange = (event) => {

  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // saveNewError = (event) => {
  //   event.preventDefault(); 

  //   const newError = {
  //     id: this.maxId + 1,
  //     date: setDate(), 
  //     error_name: this.state.error_name,
  //     error_description: this.state.error_description,
  //     user: this.state.username, 
  //     status: this.state.status,
  //     priority: this.state.priority,
  //     seriousness: this.state.seriousness,
  //     current: true, 
  //   }

  //   const data = JSON.parse(localStorage.errors);

  //   const newArr = [
  //     ...data,
  //     newError
  //   ];

  //   localStorage.setItem('errors', JSON.stringify(newArr));
  //   // console.log('errors localStorage saveNewError', JSON.parse(localStorage.errors));
      
  //   // this.setState(({ data }) => {
  //   //   const newArr = [
  //   //     ...data,
  //   //     newError
  //   //   ];

  //   //   return {
  //   //     data: newArr,
  //   //     isErrorSaved: true
  //   //   };
  //   // });

  // };

  // saveError = (event, errId) => {
  //   // const { data } = this.state;
  //   const data = JSON.parse(localStorage.errors);
  //   event.preventDefault();  

  //   const id = errId !== undefined ? errId :  this.maxId++;

  //   const newError = {
  //     id: id, 
  //     // date: setDate(), 
  //     error_name: this.state.error_name,
  //     error_description: this.state.error_description,
  //     user: this.state.username, 
  //     status: this.state.status,
  //     priority: this.state.priority,
  //     seriousness: this.state.seriousness,
  //     current: true, 
  //   }

  //   // console.log('newError', newError);

  //   data.forEach((error) => {
  //     if(error.id === newError.id) {
  //       error.current = false;
  //     }
  //   });

  //   const newArr = [
  //     ...data,
  //     newError
  //   ];

  //   localStorage.setItem('errors', JSON.stringify(newArr));
  // };

  componentDidMount() {
    localStorage.setItem('username', 'Guest');
    // localStorage.setItem('errors', JSON.stringify(this.state.data));
    

    // для проверки
    // localStorage.setItem('errors_length', JSON.parse(localStorage.getItem('errors')).length);
  };

  render() {
    // console.log("app render");
    const { isLoggedIn, username } = this.state;

    // !!!!!!!!!!!! если удаляю массив с ошибками
    // localStorage.setItem('errors', JSON.stringify(this.state.data));

    const usernameWelcome = isLoggedIn ? localStorage.getItem('username') : 'Guest';
    const data = JSON.parse(localStorage.errors);

    // console.log('data render', data);

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
                  const elements = data.filter((error) => error.id === id);
                  const errorValue = elements.filter((error) => error.current === true)[0];
                  return (
                    <ErrorForm 
                    isLoggedIn={ isLoggedIn } 
                    errorValue={ errorValue }
                    errorHistory={ elements } />
                  )
                }} />
          <Route path="/new_error" 
                render={() => (
                <ErrorForm 
                  isLoggedIn={ isLoggedIn } 
                  errorValue={ {} }
                  errorHistory={ [] } />
                )} />
          <Route path="/kanban" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn }
                  // data={ data }
                  />)} />
          <Route path="/" 
                render={() => (
                <Kanban 
                  isLoggedIn = { isLoggedIn }
                  // data={ data }
                  />)} />
        </Switch>
      </Router>
    );
  }
};

// function setDate() {
//   const date = new Date();
//     const optionsDate = {
//       year: 'numeric',
//       month: '2-digit',
//       day: '2-digit'
//     };
//   const dateString = date.toLocaleString("ru", optionsDate);
//   return dateString;
// };

// function findMaxId() {
//   let idErrors = JSON.parse(localStorage.errors);
//   idErrors = idErrors.map((error) => {
//     return error.id;
//   });  
//   const maxId = idErrors.length === 0 ? 1 : Math.max(...idErrors);
//   return maxId;
// };

