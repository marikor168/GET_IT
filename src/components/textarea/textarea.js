import React from 'react';

import './textarea.css';

const Textarea = ( {name, placeholder} ) => {
  return (
    <textarea className="form__input form__textarea" 
              name={name} 
              placeholder={placeholder} 
              cols="22" rows="5">
    </textarea>
  );
};
export default Textarea;