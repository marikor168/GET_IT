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

  // перевод на русский, так как все приложение на русском
  arr.forEach((error) => {
    if (error.status === "new") {
      error.status = "Новая"
    } else if (error.status === "opened") {
      error.status = "Открытая"
    } else if (error.status === "resolved") {
      error.status = "Решённая"
    } else {
      error.status = "Закрытая"
    }
  });

  return arr.map((error, i) =>
  
    <tr key={i}>
      <td>{error.date}</td>
      <td>{error.status}</td>
      <td>{error.error_comment}</td>
      <td>{error.user}</td>
    </tr>
  )
}

export default Table;