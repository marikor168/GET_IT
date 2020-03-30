import React from 'react';

import './form-item.css';

const FormItem = (props) => {
  const { children } = props;

  return (
      <div className="form__item">
          { children }
      </div>
    
  );
};

export default FormItem;