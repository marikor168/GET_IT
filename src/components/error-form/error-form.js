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
    this.saveError = this.props.saveError;
  }

  onErrorChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }; 

  handleSubmit = (errorId) => {

    const id = errorId !== undefined ? errorId : this.maxId + 1;

    const newError = {
      id: id,
      date: setDate(), 
      error_name: this.state.error_name !== undefined ? this.state.error_name : this.props.errorValue.error_name,
      error_description: this.state.error_description !== undefined ? this.state.error_description : this.props.errorValue.error_description,
      error_comment: this.state.error_comment !== undefined ? this.state.error_comment : this.props.errorValue.error_comment,
      user: localStorage.getItem('username'), 
      status: this.state.status !== undefined ? this.state.status : this.props.errorValue.status,
      priority: this.state.priority !== undefined ? this.state.priority : this.props.errorValue.priority,
      seriousness: this.state.seriousness !== undefined ? this.state.seriousness : this.props.errorValue.seriousness,
      current: true, 
    }
    this.saveError(newError);  
  }

  render() {
    const { isLoggedIn, errorValue, errorHistory } = this.props;
    const errorId = errorValue.id;

    let element;
    const elements = errorData.map((item) => {
  
      const { id, kind, htmlFor, labelName, name, ...others } = item;
      if(kind === "input") {
        element = <Input 
                    {...others} 
                    name={ name } 
                    defaultValue={ errorValue[name] } 
                    onChange={ this.onErrorChange }/>
      } else if(kind === "textarea") {
        element = <Textarea 
                    {...others} 
                    name={ name } 
                    defaultValue={ errorValue[name] } 
                    onChange={ this.onErrorChange }/>
      } else {
        element = <Select 
                    {...others} 
                    name={ name } 
                    defaultValue={ errorValue[name] } 
                    onChange={ this.onErrorChange } />
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
            <FormItem>
              <Link to="/kanban" onClick={() => this.handleSubmit(errorId) } >       
                <Button value='Сохранить изменения' />
              </Link>
            </FormItem>
          </BasicForm>
          {/* Если это не новая ошибка и в localStorage есть уже записи с ней, то внизу страницы появится талица с её историей */}
          { (errorHistory.length !== 0) && <Table data={ errorHistory }/> }          
        </div>
      );
    }  
    return <Redirect to="/login" />;
  }
} 

// Функция создания и формирования даты, возвращает строку
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

// Функция, определяющая максимальный id из существующих ошибок в localStorage
function findMaxId() {
  let idErrors = JSON.parse(localStorage.errors);
  idErrors = idErrors.map((error) => {
    return error.id;
  });  
  const maxId = idErrors.length === 0 ? 1 : Math.max(...idErrors);
  return maxId;
};