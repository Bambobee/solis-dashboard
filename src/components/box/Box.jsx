/* eslint-disable react/prop-types */
import React from 'react';
// import './box.scss';

const Box = (props) => {
  //   const className = {
  //     box: 'box',
  //     purple: props.purple && 'box-purple',
  //     fullheight: props.fullheight && 'box-fullheight'
  //   };

  return <div className="w-auto">{props.children}</div>;
};

export default Box;
