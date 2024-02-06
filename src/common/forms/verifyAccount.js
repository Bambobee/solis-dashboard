/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Radio } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import { formDiv, labelClass, noLoad } from 'common/classes';
import CodeScreen from './CodeScreen';

function VerifyAccount(props) {
  const [numberSelected, setNumberSelected] = useState(true);
  const [selectEmail, setSelectEmail] = useState(false);
  const [page, setPage] = useState(1);
  const [code, setCode] = useState('');

  function goNext() {
    setPage((page) => page + 1);
  }

  const [edit, setEdit] = useState(false);

  const handleSelectNumber = () => {
    setNumberSelected(true);
    setSelectEmail(false);
  };

  const handleSelectEmail = () => {
    setSelectEmail(true);
    setNumberSelected(false);
  };

  const handleRequestCode = (e) => {
    e.preventDefault();
    goNext();
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className={formDiv}>
      <div className="flex flex-col mx-auto w-[70%] space-y-8">
        {page === 1 && (
          <div className="flex flex-col  w-[100%] ">
            <div className="flex flex-row justify-between items-center w-full">
              <Radio className={labelClass} checked={numberSelected} onClick={handleSelectNumber} />
              <div className="flex flex-col ">
                <div className={labelClass}>verify with phone number</div>
                {numberSelected ? (
                  <input
                    onChange={props.vNumberChange}
                    value={props.vNumber}
                    className={`w-full ${
                      edit
                        ? `text-base px-4 py-[5px] border border-gray-300 focus:outline-none rounded-[5px] focus:border-blue-600`
                        : `focus:outline-none border-none `
                    }`}
                    readOnly={edit ? false : true}
                  />
                ) : (
                  ''
                )}
              </div>
              {numberSelected ? (
                <EditOutlined
                  onClick={() => setEdit(true)}
                  className="cursor-pointer p-[2px] font-normal hover:text-blue-700 font-semibold"
                />
              ) : (
                <div> </div>
              )}
            </div>

            <div className="flex flex-row justify-between items-center mt-[2rem] w-full">
              <Radio className={labelClass} checked={selectEmail} onClick={handleSelectEmail} />
              <div className="flex flex-col">
                <div className={labelClass}>Verify with email</div>
                {selectEmail ? (
                  <input
                    value={props.vEmail}
                    className={`w-full ${
                      edit
                        ? `text-base px-4 py-[5px] border border-gray-300 focus:outline-none rounded-[5px] focus:border-blue-600`
                        : `focus:outline-none border-none `
                    }`}
                    onChange={props.vEmailChange}
                    readOnly={edit ? false : true}
                  />
                ) : (
                  ''
                )}
              </div>
              {selectEmail ? (
                <EditOutlined
                  onClick={() => setEdit(true)}
                  className="cursor-pointer p-[2px] font-normal hover:text-blue-700 font-semibold"
                />
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        )}

        {page === 2 && <CodeScreen mode={numberSelected} code={code} handleCode={handleCode} />}

        <button className={noLoad} onClick={page === 1 ? handleRequestCode : props.handleVerify}>
          {page === 1 ? 'send code' : 'verify code'}
        </button>
      </div>
    </div>
  );
}

export default VerifyAccount;
