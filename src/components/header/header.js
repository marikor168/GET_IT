import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onLogout, username }) => {

  return (
    <nav>
      <div className="header">
        <div className="header__item-username">
          Добро пожаловать, { username }!
        </div>
        <div className="header__item-wrapper">
          <div className="header__item">
            <Link to="/new_error">Ввод новой ошибки</Link>
          </div>
          <div className="header__item">
            <Link to="/kanban">Доска ошибок</Link>
          </div>
          <div className="header__item" onClick={ onLogout }>
            <Link to="/login">Выход из системы</Link>          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;