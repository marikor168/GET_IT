import React from 'react';

import { TextField, TextareaAutosize  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './textarea.css';

const useStyles = makeStyles({
  textarea: {
    borderRadius: '3px',
  },
});

const MyTextarea = ( {name, placeholder, value, defaultValue, required, onChange, label, ...others} ) => {
  // const classes = useStyles();
  return (
    // <textarea className="form__input form__textarea" 
    //           name={name} 
    //           value={value}
    //           defaultValue={defaultValue}
    //           placeholder={placeholder} 
    //           cols="22" rows="5"
    //           required={ required }
    //           onChange={ onChange }
    //           {...others}
    //           >
    // </textarea>

    <TextareaAutosize 
    variant="outlined"
      placeholder={ placeholder }
      label={ label }
      defaultValue={ defaultValue }
      required={ required }
      onChange={ onChange }
      name={ name }
      multiline
      rows={4}
      // className={classes.textarea}
      className="textarea"
    />
  );
};
export default MyTextarea;