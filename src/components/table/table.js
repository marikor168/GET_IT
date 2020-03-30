import React from 'react';

import './table.css';

const Table = () => {
  return(
    <table className="table">
      <caption className="table__title">История</caption>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Действие</th>
          <th>Комментарий</th>
          <th>Пользователь</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10.02.2020</td>
          <td>Открытая</td>
          <td>Сверстать канбан доску</td>
          <td>Мария Короткова</td>
        </tr>
        <tr>
          <td>10.02.2020</td>
          <td>Новая</td>
          <td>Исправить Таблицу</td>
          <td>Александр Иксанов</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;