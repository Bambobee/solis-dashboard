/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ children, color, ...rest }) => {
  return (
    <button
      className={`rounded-[35px] md:mx-[2rem] bg-${color} text-text-base px-4 py-2`}
      {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary'
};

export default Button;
