import React from 'react';

import { Select, MenuItem } from '@material-ui/core';

import './my-select.css';

const MySelect = (  { name, options, value, onChange } ) => {
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

 