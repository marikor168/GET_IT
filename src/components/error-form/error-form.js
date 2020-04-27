import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import FormItem from '../form-item';
import FormLabel from '../form-label';
import MyTextarea from '../my-textarea';
import MyInput from '../my-input';
import MySelect from '../my-select';
import MyTable from '../my-table';
import BasicForm from '../basic-form/';
import Modal from '../modal/';

import { errorData } from '../app/data';

import { Button } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import './error-form.css';

export default class ErrorForm extends Component {

  constructor(props) {
    super(props);
    this.maxId = findMaxId();
    this.saveError = this.props.saveError;
    this.state = {
      isModalShow: false
    }
  }

  onErrorChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }; 

  handleSubmit = (event, errorId) => {

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
    this.setState({
      isModalShow: true,
    })

    this.saveError(event, newError);  
  }

  hideModal = () => {
    this.setState({
      isModalShow: false,
    })
  };

  render() {
    const { isLoggedIn, errorValue, errorHistory } = this.props;
    const { isModalShow } = this.state;
    const errorId = errorValue.id;
    
    let element;
    // errorData is array where you can find information about all fields in the errorForm
    // ( kind = input || textarea || select, name, labelName ... )
    const elements = errorData.map((item) => {
  
      const { id, kind, htmlFor, labelName, name, ...others } = item;

      if(kind === "input") {
        
        // "disabled" parameter is assigned dynamically.
        // This parameter should be "true" if "input" is for id of error,
        // for date, for name of user and if you edit error (because this error already have the name). 
        // Id and date are set automatically. Name of user is set from localStorage (when user is log in) 
        let disabled = false;
        if (name === "id" || name === "date" || name === "user" || errorValue.error_name !== undefined) {
          disabled = true;
        }
        element = <MyInput 
                      {...others} 
                      name={ name } 
                      defaultValue={ this.state[name] || errorValue[name] || "" } 
                      onChange={ this.onErrorChange }
                      disabled={ disabled } />

      } else if(kind === "textarea") {
        // "defValue" parameter is assigned dynamically too.
        // We have two textareas: for description of error and comment.
        // "Textarea" for comment should be a required if you edit the error. So when you open the error to edit it, this field should be empty.
        let defValue;
          if(name === "error_description") {
            defValue = errorValue[name];
          } else if (name === "error_comment") {
            defValue = null;
          }
          element = <MyTextarea 
                    {...others} 
                    name={ name } 
                    defaultValue={ this.state[name] || defValue || ""} 
                    onChange={ this.onErrorChange } />        

      } else if(kind === "select") {
        // "Select" is responsible for the error life cycle.
        // The life cycle of the error is described in the task.
        let {options} = item;
        const value = this.state[name] || errorValue[name] || "";

        element = <MySelect
                    options={ lifeCycle(name, value, options) }
                    name={ name } 
                    value={ value } 
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
          <BasicForm classNamePaper="form__wrapper"
                      value="Ошибка (создание/редактирование)"
                      onSubmit={ (event) => this.handleSubmit(event, errorId) } >
            { elements }   
            <Button
              variant="contained"
              color="primary"
              size="medium"
              type="submit"
              className="form__btn"
              startIcon={<SaveAltIcon />}>Сохранить изменения</Button>
          </BasicForm>

          {/*If this is not a new error and localStorage already has entries with it, then at the bottom of the page there will be a table with its history */}
          { (errorHistory.length !== 0) && <MyTable data={ errorHistory }/> }

          <Modal isModalShow={ isModalShow } hideModal={ this.hideModal }/>          
        </div>
      );
    }  
    return <Redirect to="/login" />;
  }
} 

// The function of creating and forming a date, returns a string
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

// Function that determines the maximum id of existing errors in localStorage
function findMaxId() {
  let idErrors = JSON.parse(localStorage.errors);
  idErrors = idErrors.map((error) => {
    return error.id;
  });  
  const maxId = idErrors.length === 0 ? 1 : Math.max(...idErrors);
  return maxId;
};

// Life cycle of error
function lifeCycle(name, value, options) {
  
  let arr = [];
  if(name === "status") {
    if(value === 'new') {
      arr = options.filter(opt => opt.value === "new" || opt.value === "opened");
    } 
    else if (value === 'opened') {
      arr = options.filter(opt => opt.value === "opened" || opt.value === "resolved");
    } else if (value === 'resolved') {
      arr = options.filter(opt => opt.value !== "new");
    } else if(value === 'closed') {
      arr = options.filter(opt => opt.value === "closed");       
    } else {
      arr = options.slice();
    }
  }
  else if(name === "priority" || name === "seriousness") {
    arr = options.slice();
  }  

  return arr;
}