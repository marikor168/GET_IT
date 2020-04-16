import React from 'react';

import './button.css'

const Button = ({ value, onClick }) => {
  return (
  <button className="btn form__btn" type="submit" onClick={ onClick }>{value}</button>
  );
};

export default Button;