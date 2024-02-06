/* eslint-disable react/prop-types */
import React from 'react';
// import './dashboard-wrapper.scss';

const DashboardWrapper = (props) => {
  return (
    <div className="flex flex-col-reverse w-[100%] lg:flex-row xl:flex-row">{props.children}</div>
  );
};

export default DashboardWrapper;

export const DashboardWrapperMain = (props) => {
  return (
    <div className="flex flex-col w-[100%] md:w-[100%] lg:w-[100%] xl:w-[70%]">
      {props.children}
    </div>
  );
};

export const DashboardWrapperRight = (props) => {
  return (
    <div className="h-auto w-[100%] flex flex-col items-center md:w-[100%] lg:h-[100vh] lg:w-[30%]">
      {props.children}
    </div>
  );
};
