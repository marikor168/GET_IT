import React from 'react';

import './basic-form.css';

const BasicForm = ( {classNameFieldset, classNameLegend, value, children} ) => {
  return (
    <form>
      <fieldset className={classNameFieldset}>
      <legend className={classNameLegend}>{value}</legend>
        { children }
      </fieldset>      
    </form>
  );
};

export default BasicForm;