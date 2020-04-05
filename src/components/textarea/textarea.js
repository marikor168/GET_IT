import React from 'react';

import './textarea.css';

const Textarea = ( {name, placeholder, value, defaultValue, onChange} ) => {
  return (
    <textarea className="form__input form__textarea" 
              name={name} 
              value={value}
              defaultValue={defaultValue}
              placeholder={placeholder} 
              cols="22" rows="5"
              required
              onChange={ onChange }>
    </textarea>
  );
};
export default Textarea;