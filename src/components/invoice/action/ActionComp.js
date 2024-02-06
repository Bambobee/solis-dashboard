/* eslint-disable react/prop-types */
import Button from 'components/ui/button/Button';
import React from 'react';

function ActionComp(props) {
  const text = `what's next ?`;

  const handleSendMail = () => {
    return null;
  };

  /**
   TODO - Check for if the current user is not the Business owner.
    1. Find user to assign to a new invoice created
    2. Load users of the company.. use the '@' REGEX
    3. Send the assigned user the notification
   */

  return (
    <div
      data-testid="invoiceAction"
      className="flex flex-row justify-between items-center m-[auto] xl:w-[70%] p-[10px]">
      <div className="flex flex-col  w-full h-auto drop-shadow-xl rounded-xl px-2 md:w-[80%] xl:w-[75%]">
        <div data-testid="compText" className="flex flex-col justify-between py-1 md:flex-row py-5">
          <h1 className="mt-0 text-[2rem] text-center font-semibold text-gray-900 md:mt-4 text-[2rem] font-bold lg:mt-4 text-[2rem]">
            {text}
          </h1>
          <div className="flex flex-row w-auto justify-between items-center">
            <button
              data-testid="actionBtn"
              className="flex justify-center bg-gray-white text-gray-900 mx-0 border-gray-900 py-2 px-4
            rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500  md:mx-[2rem]">
              preview
            </button>
          </div>
        </div>
        {props.children}
      </div>
      <div className="flex flex-col justify-start items-center  p-[5px] w-[25%] h-[auto] py-5">
        <div
          onClick={props.assign}
          className="text-[0.9rem] cursor-pointer text-center font-semibold text-gray-900  text-[1rem] font-bold lg:mt-4 text-[1rem]">
          Assign a reviewer
        </div>
        {/* <div className="mt-[0.7rem] p-[3px]">
          <input placeholder="Search user" />
        </div> */}
        <div className="mt-[1rem] flex flex-col justify-start items-center h-auto m-auto w-[100%]">
          Assgined users
        </div>
        {props.step === 2 ? (
          <Button onClick={() => handleSendMail()} color={`white`}>
            Send mail
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default ActionComp;
