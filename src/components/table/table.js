import React from 'react';

import './table.css';

const Table = ({ data }) => {
  const elements = addRowTable(data);
  
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
        { elements }
      </tbody>
    </table>
  );
};

function addRowTable (arr) {
  return arr.map((error, i) =>
    <tr key={i}>
      <td>{error.date}</td>
      <td>{error.status}</td>
      <td>{error.error_description}</td>
      <td>{error.user}</td>
    </tr>
  )
}

export default Table;