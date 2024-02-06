import React, { useState } from 'react';
import MoreOptions from 'assets/svg/vertical.svg';

function Dropdown() {
  const [show, setShow] = useState(false);
  const handleClicked = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        id="dropdownRightStartButton"
        data-dropdown-toggle="dropdownRightStart"
        data-dropdown-placement="right-start"
        className=" relative h-full flex items-center w-[4px]  text-gray-500 ">
        <img
          onClick={handleClicked}
          src={MoreOptions}
          className="h-[80%] text-gray-400 cursor-pointer"
          alt="more options"
        />
        {show && (
          <div
            className="bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 w-[5rem]"
            id="dropdown">
            <ul className="py-1" aria-labelledby="dropdown">
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Edit
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Suspend
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                  Remove
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
