import React from 'react';

import './header.css';

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li className="header__item"><button type="button">Ввод новой ошибки</button></li>
        <li className="header__item"><button type="button">Доска ошибок</button></li>
        <li className="header__item"><button type="button">Выход из системы</button></li>
      </ul>
    </nav>
  );
};

export default Header;