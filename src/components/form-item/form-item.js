import React from 'react';

import './form-item.css';

const FormItem = ({ children }) => {

  return (
      <div className="form__item">
          { children }
      </div>
    
  );
};

export default FormItem;