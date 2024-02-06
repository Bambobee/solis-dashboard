/* eslint-disable react/prop-types */
import React from 'react';

function MainForm(props) {
  return (
    <>
      <h3 className="mt-2 text-2xl font-bold text-gray-900">{props.title}</h3>
      <form className="flex flex-col space-y-6 w-[80%] justify-center">{props.children}</form>
    </>
  );
}

export default MainForm;
