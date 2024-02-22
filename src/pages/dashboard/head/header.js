import React from 'react'
import { useState } from 'react';
import flag from './images/usa-flag1728.jpg';
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import uganda from './images/Flag_of_Uganda.svg.png';
import './style.css';
import { FaStar } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";

const Top = ({ setClose }) => {
  const [open, setOpen] = useState(false);
  return (

    <div className="border-b-4 border-gray-200 flex gap-4 h-14 absolute w-full z-10 ">
      <div class="flex bg-[#f7f9fa] w-[18.188rem] items-center gap-[0.625rem] head">
        <div class="w-[10rem] h-[2.5625rem] ml-[4.6875rem] bg-white flex items-center">
          <img src={flag} alt="logo" width={50} />
          <div class="border-l-2 border-solid border-blue-900 p-2 h-7 flex items-center text-blue-900 font-bold">

            <span>SOLis Group</span></div>
        </div>
        <div class="text-gray-500 bg-white w-8 h-9 flex items-center justify-center rounded-2xl cursor-pointer">

          <FaBars onClick={() => setClose((prevClose) => !prevClose)} />
        </div>
      </div>

      <div className={open ? 'second-section open' : 'second-section'}>
        <div class="pl-5 first-inside text-lg text-gray-600 flex items-center">

          <IoSearchOutline className='search' />
          <input type="text" class="w-40 input h-5 bg-transparent pl-2 border-none" style={{
            outline: 'none', border: 'none'
          }} placeholder="Search" />

          <FaArrowRightLong className='long' />
        </div>

        <div className=" flex second-inside  items-center justify-center gap-[1.2rem]">
          <div className=" flex items-center child justify-center gap-[1.2rem]">

            <img src={uganda} alt="flag" style={{
              width: '27.27px',
              height: '23px',
              borderRadius: '8px'
            }} width={50} />

            <div className="w-[8.7725rem] h-10 bg-customBlue rounded-md flex items-center justify-center gap-[0.625rem]">
              <FaStar style={{
                fontSize: '20px',
                color: '#97a6c3'
              }} />
              <span style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(47, 188, 72, 0.7)',
                marginTop: '-5px'
              }}>Upgrade</span>
            </div>
          </div>
          <div className=" flex items-center child justify-center gap-[1.2rem]">
            <FaEnvelope style={{
              color: '#97a6c3',
              fontSize: '25px'
            }} />
            <BiSolidBellRing style={{
              color: '#97a6c3',
              fontSize: '25px'
            }} />
            <span className="relative  w-[25px] h-[25px] -top-[15px] -left-[30px] flex items-center justify-center text-white "
              style={{
                background: 'linear-gradient(180deg, #F03300 0%, #FF9862 100%)',
                borderRadius: '50%',
                fontWeight: '600'
              }}>2</span>
          </div>
          <div style={{
            background: '#2f4d88',
            color: '#fff',
            padding: '7px',
            borderRadius: '5px',
            alignItems: 'center',
          }} className="flex justify-center text-sm cursor-pointer" onClick={() => logout()}>
            <AiOutlineLogout style={{
              // color: 'white',
              fontWeight: 'bold',
              paddingLeft: '5px',
              fontSize: '25px',
            }} />&nbsp;
            Logout{' '}
          </div>
        </div>
      </div>

      <div className='dot-format'>
        <div onClick={() => setOpen(!open)} className='dots'>
          <HiDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default Top