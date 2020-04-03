import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorForm from '../error-form';
import Table from '../table';
import { errors } from '../app/data';

import './edit-error.css';

const EditError = ({ isLoggedIn, errorId, saveError, onErrorChange }) => {
    const data = errors.filter((error) => error.id === errorId);
    const errorValue = data.filter((error) => error.current === true)[0];

    if(isLoggedIn) {
      return(
        <div>
          <ErrorForm isLoggedIn={ isLoggedIn } errorValue={ errorValue } saveError={ saveError } onErrorChange={ onErrorChange }/>
          <Table data={ data }/>
        </div>
      );
    }

    return <Redirect to="/login" />;
    
};

export default EditError;