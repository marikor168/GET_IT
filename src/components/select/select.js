import React from 'react';

import './select.css';

const Select = ( {name, options, defaultValue, onChange } ) => {

  let arrStatus = [], 
      arrStatusNew = [],
      arrStatusOpened = [],
      arrStatusResolved = [],
      arrStatusClosed = [];

  if(name === "status") {
    arrStatus = options;
    if(defaultValue === 'Новая') {
      for( let i=1; i<3; i++) {
        arrStatusNew.push(arrStatus[i]);
      }
      options = arrStatusNew;
    } else if (defaultValue === 'Открытая') {
      for( let i=2; i<4; i++) {
        arrStatusOpened.push(arrStatus[i]);
      }
      options = arrStatusOpened;
    } else if (defaultValue === 'Решённая') {
      for( let i=2; i<5; i++) {
        arrStatusResolved.push(arrStatus[i]);
      }
      options = arrStatusResolved;
    } else if(defaultValue === 'Закрытая') {
      arrStatusClosed = [arrStatus[4]];
      options = arrStatusClosed;
    } else {
      options = arrStatus;
    }
  }

  return (
    <select className="form__select" name={name} defaultValue={defaultValue} onChange={ onChange } required>
      {options.map(opt => (
        <option key={opt.id} value={opt.value}>{opt.descr}</option>
      ))};
    </select>
  );
};

export default Select;

 