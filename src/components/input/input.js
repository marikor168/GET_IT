import React from 'react';

import './input.css';

const Input= ( {type, name, placeholder, disabled, required} ) => {
  return (
    <input className="form__input" 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                disabled={disabled}
                required={required}/>
  );
};

export default Input;