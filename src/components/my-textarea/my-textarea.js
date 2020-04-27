import React from 'react';

import { TextareaAutosize  } from '@material-ui/core';

import './my-textarea.css';

const MyTextarea = ( {name, placeholder, defaultValue, required, onChange} ) => {
  return (

    <TextareaAutosize 
      className="textarea"
      name={ name }
      placeholder={ placeholder }
      defaultValue={ defaultValue }
      required={ required }
      onChange={ onChange }
      rows={4}
    />
  );
};
export default MyTextarea;