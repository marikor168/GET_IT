import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import ErrorCard from '../error-card/';

import './kanban.css';

const Kanban = ({ isLoggedIn }) => {

  let newErrors = [];
  let openedErrors = [];
  let resolvedErrors = [];
  let closedErrors = []; 

  // !!!!!!! Достаю данные из localStorage
  const data = JSON.parse(localStorage.errors);

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
   // перевод на русский, так как все приложение на русском
   arr.forEach((error) => {
    if (error.priority === "highest") {
      error.priority = "Очень высокий"
    } else if (error.priority === "high") {
      error.priority = "Высокий"
    } else if (error.priority === "medium") {
      error.priority = "Средний"
    } else {
      error.priority = "Низкий"
    }
  });
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


