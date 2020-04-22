import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// import Button from '../button/';
import FormItem from '../form-item';
import FormLabel from '../form-label';
import MyTextarea from '../textarea';
import MyInput from '../input/';
import MySelect from '../select';
import BasicForm from '../basic-form/';
import MyTable from '../table/';
import { errorData } from '../app/data';
import Modal from '../modal/';

import { Button } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
// import { TextField } from '@material-ui/core';

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
    console.log(event);
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
    console.log("PROPRS", this.props);
    const { isLoggedIn, errorValue, errorHistory } = this.props;
    const { isModalShow } = this.state;
    const errorId = errorValue.id;
    
    let element;
    const elements = errorData.map((item) => {

      console.log('item', item);
  
      const { id, kind, htmlFor, labelName, name, ...others } = item;
      if(kind === "input") {
        
        let disabled;
        if (errorValue.error_name !== undefined ) {
          disabled = true;
        } else if (name !== "id" && name !== "date" && name !== "user") {
          disabled = false;
        } else {
          disabled = true;
        }
        element = <MyInput 
                      {...others} 
                      name={ name } 
                      defaultValue={ this.state[name] || errorValue[name] || "" } 
                      onChange={ this.onErrorChange }
                      disabled={ disabled } 
                      label={ labelName }/>
      } else if(kind === "textarea") {
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
                    onChange={ this.onErrorChange }
                    label={labelName}
                    />        
      } else if(kind === "select") {
        let {options} = item;
        const value = this.state[name] || errorValue[name] || "";

        element = <MySelect 
                    options={ lifeCycle(name, value, options) }
                    name={ name } 
                    value={ value } 
                    onChange={ this.onErrorChange } 
                  />
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
        <div className="errorFormTop">
          <BasicForm classNamePaper="form__wrapper" 
                      classNameLegend="form__legend"
                      value="Ошибка (создание/редактирование)"
                      onSubmit={ (event) => this.handleSubmit(event, errorId)  }                 
                      >
            {/* <div className="wrapperInputs"> */}
              { elements }   
            {/* </div>      */}
            {/* <FormItem> */}
              <Button
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                className="form__btn"
                startIcon={<SaveAltIcon />}
              >
                Сохранить изменения
              </Button>
                {/* <Button value='Сохранить изменения' /> */}
            {/* </FormItem> */}
          </BasicForm>
          {/* Если это не новая ошибка и в localStorage есть уже записи с ней, то внизу страницы появится талица с её историей */}
          { (errorHistory.length !== 0) && <MyTable data={ errorHistory }/> }
          <Modal isModalShow={ isModalShow } hideModal={ this.hideModal }/>          
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