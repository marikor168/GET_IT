import React from 'react';

import ErrorCard from '../error-card/';
import { errors } from '../app/data';

import './kanban.css';
import { Redirect, Link } from 'react-router-dom';

const Kanban = ({ isLoggedIn, data }) => {

  let newErrors = [];
  let openedErrors = [];
  let resolvedErrors = [];
  let closedErrors = []; 

  // errors.forEach((item) => {
  //   if (item.status === "new") {
  //     newErrors.push(item)
  //   } else if (item.status === "opened") {
  //     openedErrors.push(item)
  //   } else if (item.status === "resolved") {
  //     resolvedErrors.push(item)
  //   } else {
  //     closedErrors.push(item)
  //   }
  // });
  console.log(data);
 data.forEach((item) => {
    if (item.status === "new") {
      newErrors.push(item)
    } else if (item.status === "opened") {
      openedErrors.push(item)
    } else if (item.status === "resolved") {
      resolvedErrors.push(item)
    } else {
      closedErrors.push(item)
    }
  });

  newErrors = filterCurrentError(newErrors);
  openedErrors = filterCurrentError(openedErrors);
  resolvedErrors = filterCurrentError(resolvedErrors);
  closedErrors = filterCurrentError(closedErrors);

  console.log(closedErrors);

  if(isLoggedIn) {
    return(
      <div className="kanban">
  
        <div className="kanban__section">Новая</div>
        <div className="kanban__section">Открытая</div>
        <div className="kanban__section">Решённая</div>
        <div className="kanban__section">Закрытая</div>
        
        <div className="kanban__section">
        { createErrorCard(newErrors) }
        </div>
  
        <div className="kanban__section">
        { createErrorCard(openedErrors) }
        </div>
  
        <div className="kanban__section">
          { createErrorCard(resolvedErrors) }
        </div>
  
        <div className="kanban__section">
          { createErrorCard(closedErrors) }
        </div>
  
      </div>
    );
  }
 
  return <Redirect to="/login" />;
};

function createErrorCard (arr) {
  return arr.map((error) => {
    const path = `/error/${error.id}`;
    return(
    <Link to={path} key={error.id}>
      <ErrorCard  title={error.error_name} user={error.user} priority={error.priority}/>
    </Link>
  );
  });
};

function filterCurrentError(arr) {
  return arr.filter((error) => error.current === true);
};

export default Kanban;


