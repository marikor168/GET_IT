import React from 'react';

import Header from '../header';
import ErrorForm from '../error-form';
import Table from '../table';
import LoginForm from '../login-form/';
import Kanban from '../kanban/';

import './app.css'; 

const App = () => {
  return (
    <div>
      <Header />
      <ErrorForm />
      <Table /> 
      <LoginForm />
      <Kanban />   
    </div>
  );
};

export default App;