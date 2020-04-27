import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { Paper } from '@material-ui/core';

import ErrorCard from '../error-card/';
import { translatePriority, filterCurrentError, filterErrors, getItemLS } from '../app/utils';

import './kanban.css';

const Kanban = ({ isLoggedIn }) => {

  // Get data from a localStorage
  const data = getItemLS('errors');

  const errors = filterErrors(data);

  const newErrors = filterCurrentError(errors.newErrors);
  const openedErrors = filterCurrentError(errors.openedErrors);
  const resolvedErrors = filterCurrentError(errors.resolvedErrors);
  const closedErrors = filterCurrentError(errors.closedErrors);

  if(isLoggedIn) {
    return(
      <div className="kanban">

        <Paper elevation={15} className="kanban__section">Новая</Paper>
        <Paper elevation={15} className="kanban__section">Открытая</Paper>
        <Paper elevation={15} className="kanban__section">Решённая</Paper>
        <Paper elevation={15} className="kanban__section">Закрытая</Paper>
        
        <Paper elevation={15} className="kanban__section">
          { createKanbanSection(newErrors) }
        </Paper>

        <Paper elevation={15} className="kanban__section">
          { createKanbanSection(openedErrors) }
        </Paper>

        <Paper elevation={15} className="kanban__section">
          { createKanbanSection(resolvedErrors) }
        </Paper>

        <Paper elevation={15} className="kanban__section">
          { createKanbanSection(closedErrors) }
        </Paper>
  
      </div>
    );
  }
 
  return <Redirect to="/login" />;
};

function createKanbanSection (arr) {
   
  return arr.map((error) => {
    const path = `/error/${error.id}`;
    return(
    <Link to={path} key={error.id}>
      <ErrorCard  
        title={error.error_name} 
        user={error.user} 
        priority={translatePriority(error.priority)} />
    </Link>
  );
  });
};

export default Kanban;


