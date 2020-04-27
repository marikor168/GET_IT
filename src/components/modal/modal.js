import React from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

const Modal = ({ isModalShow, hideModal }) => {
   
  const show = {display: 'flex'};
  const hide = {display: 'none'};
  const style = isModalShow === true ? show : hide;    
  
  return (
    <div style={ style } className="modal__wrapper">
      <div className="modal">
          <p className="modal__text">Ошибка успешно сохранена</p>
          <Link className="modal__link" to="/kanban" onClick={ hideModal }>
            <button className="modal__btn" >ПРИНЯТЬ</button>
          </Link>
      </div>
    </div>
  );  
} 

export default Modal;