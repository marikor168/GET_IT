import React from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../button/';
import FormItem from '../form-item';
import FormLabel from '../form-label';
import Textarea from '../textarea';
import Input from '../input/';
import Select from '../select';
import BasicForm from '../basic-form/';
import { errorData } from '../app/data';

import './error-form.css';

const ErrorForm = ({ isLoggedIn, errorValue, saveError, onErrorChange }) => {

  let element;
  const elements = errorData.map((item) => {

    const { id, kind, htmlFor, value, name, ...others } = item;
    
    if(kind === "input") {
      element = <Input {...others} name={ name } defaultValue={ errorValue[name] } onChange={ onErrorChange }/>
    } else if(kind === "textarea") {
      element = <Textarea {...others} name={ name } defaultValue={ errorValue[name] } onChange={ onErrorChange }/>
    } else {
      element = <Select {...others} name={ name } defaultValue={ errorValue[name] } onChange={ onErrorChange } />
    };

    return (
      <FormItem key={id}>
        <FormLabel htmlFor={htmlFor} value={value} />
        {element}
      </FormItem>
    );   
  });

  if(isLoggedIn) {
    return (
      <BasicForm classNameFieldset="form__wrapper" 
                  classNameLegend="form__legend"
                  value="Ошибка (создание/редактирование)"
                  onSubmit={ saveError }>
        
        { elements }      
  
        <Button value='Сохранить изменения' />
      </BasicForm>
    );
  }

  return <Redirect to="/login" />;
};

/*
function handleSubmit() {
  const obj =  {
    id: this.state.id,
    date: new Date(),
    ...
  };

  this.props.saveError(obj);

}
*/

export default ErrorForm;