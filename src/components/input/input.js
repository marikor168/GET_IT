import React from 'react';

import './input.css';

const Input= ( {type, name, placeholder, disabled, required, onChange } ) => {
  return (
    <input className="form__input" 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                disabled={disabled}
                required={required}
                onChange={ onChange }
                />
  );
};

export default Input;