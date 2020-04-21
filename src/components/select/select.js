import React from 'react';

import { TextField, Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

import './select.css';

const MySelect = ( {name, options, value, onChange, label } ) => {

  // let arrStatus = [], 
  //     arrStatusNew = [],
  //     arrStatusOpened = [],
  //     arrStatusResolved = [],
  //     arrStatusClosed = [];

  // if(name === "status") {
  //   arrStatus = options;
  //   if(defaultValue === 'new') {
  //     for( let i=1; i<3; i++) {
  //       arrStatusNew.push(arrStatus[i]);
  //     }
  //     options = arrStatusNew;
  //   } else if (defaultValue === 'opened') {
  //     for( let i=2; i<4; i++) {
  //       arrStatusOpened.push(arrStatus[i]);
  //     }
  //     options = arrStatusOpened;
  //   } else if (defaultValue === 'resolved') {
  //     for( let i=2; i<5; i++) {
  //       arrStatusResolved.push(arrStatus[i]);
  //     }
  //     options = arrStatusResolved;
  //   } else if(defaultValue === 'closed') {
  //     arrStatusClosed = [arrStatus[4]];
  //     options = arrStatusClosed;
  //   } else {
  //     options = arrStatus;
  //   }
  // }
  // console.log(defaultValue);
  return (
    // <select className="form__select" name={name} defaultValue={defaultValue} onChange={ onChange } required>
    //   {options.map(opt => (
    //     <option key={opt.id} value={opt.value}>{opt.descr}</option>
    //   ))};
    // </select>
    <Select 
      // label={label}
      name={name} 
      value={value}
      onChange={ onChange } 
      // required
    >
      {options.map(opt => (
        <MenuItem
          key={opt.id} 
          value={opt.value} 
        >
          {opt.descr}
        </MenuItem>
        
      ))};
    </Select>
  );
};

export default MySelect;

 