import React from 'react';

import './textarea.css';

const Textarea = ( {name, placeholder, value, defaultValue, required, onChange, ...others} ) => {
  return (
    <textarea className="form__input form__textarea" 
              name={name} 
              value={value}
              defaultValue={defaultValue}
              placeholder={placeholder} 
              cols="22" rows="5"
              required={ required }
              onChange={ onChange }
              {...others}
              >
    </textarea>
  );
};
export default Textarea;