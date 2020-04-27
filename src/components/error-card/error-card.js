import React from 'react';

import './error-card.css';

const ErrorCard = ( {title, user, priority} ) => {
  return ( 
    <div className="error__card">
      <div className="card__title">{title}</div>
      <div className="card__priority">{priority}</div>
      <div className="card__user">{user}</div>
    </div>
  );
};

export default ErrorCard;