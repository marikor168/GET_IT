import React from 'react';
import { Link } from 'react-router-dom';


import { Paper, Button } from '@material-ui/core';
import './modal.css';

const Modal = ({ isModalShow, hideModal }) => {
   
  const show = {display: 'flex'};
  const hide = {display: 'none'};
  const style = isModalShow === true ? show : hide;    
  
  return (
    <div style={ style } className="modal__wrapper">
      <div className="modal">
          {/* <button className="modal-close">&times;</button> */}
          <p className="modal__text">Ошибка успешно сохранена</p>
          <Link className="modal__link" to="/kanban" onClick={ hideModal }>
            <button className="modal__btn" >ПРИНЯТЬ</button>
          </Link>
      </div>
    </div>

    // <div style={ style } className="modal__wrapper">
    // <Paper elevation={10}>
    //   <p className="modal__text">Ошибка успешно сохранена</p>
    //       <Link className="modal__link" to="/kanban" onClick={ hideModal }>
    //         {/* <button className="modal__btn" >Принять</button> */}
    //         <Button >Принять</Button>
    //       </Link>
    // </Paper>
      
    // </div>
  );  
} 

export default Modal;