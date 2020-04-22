import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

import './select.css';

const MySelect = (  { name, options, value, onChange } ) => {
console.log('optionsSelect', options);
  return (
    <Select name={name} value={value} onChange={ onChange }>
      {options.map(opt => (
        <MenuItem key={opt.id} value={opt.value}>
           {opt.descr}
        </MenuItem>     
      ))};
    </Select>
  );
};

export default MySelect;

 