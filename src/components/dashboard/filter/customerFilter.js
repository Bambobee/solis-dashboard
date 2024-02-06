/* eslint-disable react/prop-types */
import React from 'react';
import {
  SearchOutlined,
  PrinterOutlined,
  CloudDownloadOutlined,
  FilterOutlined
} from '@ant-design/icons';

function CustomFilter(props) {
  return (
    <div className="flex flex-row justify-between px-3 h-[3rem] text-[1rem] font-normal  items-center my-[0.5rem] py-2  w-full font-semibold text-gray-900 md:flex-row text-[1.5rem]">
      {props.text}
      <div className="w-[50%] flex flex-row justify-between items-center text-[1.2rem] md:w-[30%] lg:w-[12%]">
        <SearchOutlined className="cursor-pointer hover:text-blue-500" />{' '}
        <CloudDownloadOutlined className="cursor-pointer hover:text-blue-500" />{' '}
        <PrinterOutlined className="cursor-pointer hover:text-blue-500" />{' '}
        <FilterOutlined className="cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
}

export default CustomFilter;
