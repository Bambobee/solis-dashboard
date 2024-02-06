/* eslint-disable react/prop-types */
import React from 'react';
import VerificationInput from 'react-verification-input';

function CodeScreen(props) {
  return (
    <div className="flex flex-col items-center w-[100%] space-y-8">
      <div className="text-[1.2rem] font-normal">
        {' '}
        Enter 5 digit code sent {props.mode ? 'to your phone' : 'to your email'}
      </div>
      <div className=" flex flex-row justify-around w-full text-base px-10 py-[15px]">
        <VerificationInput
          onChange={props.handleVerify}
          length={5}
          autoFocus={true}
          classNames={{
            container: 'container',
            character: 'character',
            characterInactive: 'character--inactive',
            characterSelected: 'character--selected'
          }}
        />
      </div>
    </div>
  );
}

export default CodeScreen;
