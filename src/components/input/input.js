import React from 'react';

import './input.css';

const Input= ( { type, name, value, defaultValue, placeholder, disabled, required, onChange, ...others } ) => {
  return (
    <input className="form__input" 
            type={type} 
            name={name}
            value={value}
            defaultValue={defaultValue} 
            placeholder={placeholder} 
            disabled={disabled}
            required={required}
            onChange={ onChange }
            {...others}
            />
  );
};

export default Input;