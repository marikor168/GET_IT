import React from 'react';

import './form-label.css';

const FormLabel = ( {htmlFor, value} ) => {
  return(
    <label className="form__label" htmlFor={htmlFor}>{value}</label>
  );
};

export default FormLabel;