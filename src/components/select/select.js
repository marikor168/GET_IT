import React from 'react';

import './select.css';

const Select = ( {name, options} ) => {
  return (
    <select className="form__select" name={name}>
      {options.map(opt => (
        <option key={opt.id} value={opt.value}>{opt.descr}</option>
      ))};
    </select>
  );
};

export default Select;

 