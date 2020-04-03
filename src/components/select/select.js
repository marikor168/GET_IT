import React from 'react';

import './select.css';

const Select = ( {name, options, defaultValue, onChange } ) => {
  return (
    <select className="form__select" name={name} defaultValue={defaultValue} onChange={ onChange }>
      {options.map(opt => (
        <option key={opt.id} value={opt.value}>{opt.descr}</option>
      ))};
    </select>
  );
};

export default Select;

 