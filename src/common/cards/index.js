/* eslint-disable react/prop-types */
import React from 'react';

function Card(props) {
  return (
    <div className="flex my-[0.5rem] h-[8rem] flex-row rounded overflow-hidden shadow-lg bg-white text-gray-600 w-[100%] md:w-[23%]  text-[14px] font-semibold items-center justify-around rounded-[5px] px-2">
      <div className="flex flex-col items-center justify-center w-[20%] h-[70%] border  rounded-[50%] md:w-[30%] h-[50%] xl:w-[30%] h-[65%]">
        {props.icon}
      </div>
      <div className="flex flex-col w-[65%] items-center">{props.children}</div>
    </div>
  );
}

export default Card;
