import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeadComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-full items-center  justify-between py-5 h-[50%]">
      <div className="text-[2rem] font-bold text-gray-900">Invoices</div>
      <button
        onClick={() => {
          navigate('/dashboard/invoice/new');
        }}
        className=" flex justify-center bg-gray-900 
                hover:bg-gray-600 text-gray-100 p-2
                rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer 
                transition ease-in duration-500">
        New Invoice
      </button>
    </div>
  );
}

export default HeadComponent;
