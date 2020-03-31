import React from 'react';

import './basic-form.css';

const BasicForm = ( {classNameFieldset, classNameLegend, value, children, onSubmit } ) => {
  return (
    <form onSubmit={ onSubmit }>
      <fieldset className={classNameFieldset}>
      <legend className={classNameLegend}>{value}</legend>
        { children }
      </fieldset>      
    </form>
  );
};

export default BasicForm;