import React from 'react';

import Button from '../button/';
import FormItem from '../form-item';
import FormLabel from '../form-label';
import Textarea from '../textarea';
import Input from '../input/';
import Select from '../select';
import BasicForm from '../basic-form/';
import { errorData } from '../app/data';

import './error-form.css';

const ErrorForm = () => {

  let element;
  const elements = errorData.map((item) => {
    const {id, kind, htmlFor, value, ...others} = item;
    
    if(kind === "input") {
      element = <Input {...others} />
    } else if(kind === "textarea") {
      element = <Textarea {...others}/>
    } else {
      element = <Select {...others}/>
    };

    return (
      <FormItem key={id}>
        <FormLabel htmlFor={htmlFor} value={value} />
        {element}
      </FormItem>
    );
  });

  return (
    <BasicForm classNameFieldset="form__wrapper" 
                classNameLegend="form__legend"
                value="Ошибка (создание/редактирование)">
      
      { elements }      

      <Button value='Сохранить изменения'/>
    </BasicForm>
  );
};

export default ErrorForm;