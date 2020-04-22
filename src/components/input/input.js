import React from 'react';

import { TextField, 
  // Input
 } from '@material-ui/core';

import './input.css';

const MyInput= ( { type, name, value, defaultValue, placeholder, disabled, required, onChange, label, ...others } ) => {
  return (
    // <input className="form__input" 
    //         type={type} 
    //         name={name}
    //         value={value}
    //         defaultValue={defaultValue} 
    //         placeholder={placeholder} 
    //         disabled={disabled}
    //         required={required}
    //         onChange={ onChange }
    //         {...others}
    //         />

     <TextField
    //  variant="outlined"
      type={type} 
      name={name}
      value={value}
      // label={label}
      defaultValue={defaultValue} 
      // placeholder={placeholder} 
      disabled={disabled}
      required={required}
      onChange={ onChange }
    />
  );
};

export default MyInput;