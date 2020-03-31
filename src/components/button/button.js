import React from 'react';

import './button.css'

const Button = ({ value }) => {
  return (
  <button className="btn form__btn" type="submit" >{value}</button>
  );
};

export default Button;