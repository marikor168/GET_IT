import React from 'react';
import { Link } from 'react-router-dom';

import ErrorCard from '../error-card/';
import { errors } from '../app/data';

import './kanban.css';
import { Redirect } from 'react-router-dom';

const Kanban = ({ isLoggedIn }) => {

  const newErrors = [];
  const openedErrors = [];
  const resolvedErrors = [];
  const closedErrors = []; 

  errors.forEach((item) => {
    if (item.status === "Новая") {
      newErrors.push(item)
    } else if (item.status === "Открытая") {
      openedErrors.push(item)
    } else if (item.status === "Решённая") {
      resolvedErrors.push(item)
    } else {
      closedErrors.push(item)
    }
  });

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
  return arr.map((error) =>
    <ErrorCard key={error.id} title={error.error_name} user={error.user} priority={error.priority}/>
  )
}
export default Kanban;

