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

const ErrorForm = ({ isLoggedIn, errorValue }) => {

  let element;
  const elements = errorData.map((item) => {
    const {id, kind, htmlFor, value, name, ...others} = item;
    
    if(kind === "input") {
      element = <Input {...others} defaultValue={ errorValue[name] }/>
    } else if(kind === "textarea") {
      element = <Textarea {...others} defaultValue={ errorValue[name] }/>
    } else {
      element = <Select {...others} defaultValue={ errorValue[name] } />
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
                  value="Ошибка (создание/редактирование)">
        
        { elements }      
  
        <Button value='Сохранить изменения'/>
      </BasicForm>
    );
  }

  return <Redirect to="/login" />;
};

export default ErrorForm;