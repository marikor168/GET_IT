import React from 'react';
import { Redirect } from 'react-router-dom';

import ErrorForm from '../error-form';
import Table from '../table';
import { errors } from '../app/data';
import BasicForm from '../basic-form/';
import Button from '../button/';

import './edit-error.css';

// export const errorData = [
//   {id: 1, kind: "input", htmlFor:"id", value:"Номер", type:"text", name: "id", placeholder: "Номер", disabled: true, required: false},
//   {id: 2, kind: "input", htmlFor:"date", value:"Дата", type:"text", name: "date", placeholder: "Дата", disabled: true, required: false},
//   {id: 3, kind: "input", htmlFor:"error_name", value:"Краткое описание ошибки", type:"text", name: "error_name", placeholder: "Краткое описание ошибки", disabled: false, required: true},
//   {id: 4, kind: "textarea", htmlFor:"error_description", value:"Подробное описание ошибки", type:"text", name: "error_description", placeholder: "Опишите ошибку подробно"},
//   {id: 5, kind: "input", htmlFor:"user", value:"Пользователь", type: "text", name: "user", placeholder: "Пользователь", disabled: true, required: false},
//   {id: 6, kind: "select", htmlFor:"status", value:"Статус ошибки", name: "status", options: statusItems },
//   {id: 7, kind: "select", htmlFor:"priority", value:"Приоритет", name: "priority", options: priorityItems },
//   {id: 8, kind: "select", htmlFor:"seriousness", value:"Серьёзность", name: "seriousness", options: seriousnessItems },
// ];

const EditError = ({ isLoggedIn, errorId }) => {
    const data = errors.filter((error) => error.id === errorId);
    const errorValue = data.filter((error) => error.current === true)[0];
    

    if(isLoggedIn) {
      return(
        <div>
          <ErrorForm isLoggedIn={ isLoggedIn } errorValue={ errorValue }/>

          <Table data={ data }/>
        </div>
      );
    }

    return <Redirect to="/login" />;
    
};

export default EditError;