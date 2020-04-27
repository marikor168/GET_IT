import React from 'react';

import { Paper } from '@material-ui/core';

import './basic-form.css';

const BasicForm = ( {classNamePaper, value, children, onSubmit } ) => {

  return (
    <div>
      <Paper elevation={22} className={ classNamePaper }>
        <h1 className="form__title">{value}</h1>
        <form onSubmit={ onSubmit } >
          { children }
        </form>
      </Paper>
    </div>
  );
};

export default BasicForm;