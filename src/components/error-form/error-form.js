import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Button from '../button/';
import FormItem from '../form-item';
import FormLabel from '../form-label';
import Textarea from '../textarea';
import Input from '../input/';
import Select from '../select';
import BasicForm from '../basic-form/';
import Table from '../table/';
import { errorData } from '../app/data';

import './error-form.css';

export default class ErrorForm extends Component {

  constructor(props) {
    super(props);
    this.maxId = findMaxId();
  }

  onErrorChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }; 

  saveError = (newError) => {
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

  handleSubmit = (errorId) => {

    const id = errorId !== undefined ? errorId : this.maxId + 1;

    const newError = {
      id: id,
      date: setDate(), 
      error_name: this.state.error_name,
      error_description: this.state.error_description,
      user: localStorage.getItem('username'), 
      status: this.state.status,
      priority: this.state.priority,
      seriousness: this.state.seriousness,
      current: true, 
    }
    this.saveError(newError);  
  }

  render() {

    const { isLoggedIn, errorValue, errorHistory } = this.props;
    const errorId = errorValue.id;
    console.log('errorId', errorId);

    let element;
    const elements = errorData.map((item) => {
  
      const { id, kind, htmlFor, labelName, name, ...others } = item;
      
      if(kind === "input") {
        element = <Input {...others} name={ name } defaultValue={ errorValue[name] } onChange={ this.onErrorChange }/>
      } else if(kind === "textarea") {
        element = <Textarea {...others} name={ name } 
        // defaultValue={ errorValue[name] } 
        onChange={ this.onErrorChange }/>
      } else {
        element = <Select {...others} name={ name } defaultValue={ errorValue[name] } onChange={ this.onErrorChange } />
      };
  
      return (
        <FormItem key={id}>
          <FormLabel htmlFor={htmlFor} value={labelName} />
          {element}
        </FormItem>
      );   
    });
  
    if(isLoggedIn) {
      return (
        <div>
          <BasicForm classNameFieldset="form__wrapper" 
                      classNameLegend="form__legend"
                      value="Ошибка (создание/редактирование)"
                      // onSubmit={ this.saveNewError }                 
                      >     
            { elements }   
            <Link to="/kanban" onClick={() => this.handleSubmit(errorId) } >       
              <Button value='Сохранить изменения' />
            </Link>
          </BasicForm>
          { (errorHistory.length !== 0) && <Table data={ errorHistory }/> }          
        </div>
      );
    }  
    return <Redirect to="/login" />;
  }
} 

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

function findMaxId() {
  let idErrors = JSON.parse(localStorage.errors);
  idErrors = idErrors.map((error) => {
    return error.id;
  });  
  const maxId = idErrors.length === 0 ? 1 : Math.max(...idErrors);
  return maxId;
};