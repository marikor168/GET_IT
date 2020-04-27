import React from 'react';

import { TextField } from '@material-ui/core';

import './my-input.css';

const MyInput= ( { type, name, value, defaultValue, placeholder, disabled, required, onChange, ...others } ) => {
  return (
     <TextField
      type={type} 
      name={name}
      value={value}
      defaultValue={defaultValue} 
      placeholder={placeholder} 
      disabled={disabled}
      required={required}
      onChange={ onChange }
    />
  );
};

export default MyInput;