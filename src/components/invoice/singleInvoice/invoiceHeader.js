/* eslint-disable react/prop-types */
import React from 'react';
import { Collapse } from 'antd';
import Logo from 'assets/svg/logo.svg';

const { Panel } = Collapse;
function callback() { }

function InvoiceHeader(props) {
  return (
    <div>
      <Collapse
        style={{ borderRadius: '10px' }}
        expandIconPosition="right"
        defaultActiveKey={['1']}
        onChange={callback}>
        <Panel header="Business name contact and address" key="1">
          {/* {props.business ? (
            <div className="flex flex-col justify-between  w-full h-full md:flex-row">
              <div className="flex flex-col w-[100%] md:w-[70%]">
                <div className="flex flex-row justify-start items-center">
                  <div className="mr-[1.2rem] w-auto h-auto rounded-[60%]">
                    <img className="w-[55px] h-[55px] " src={Logo} alt="google" />
                  </div>
                  <div className="flex flex-col font-bold text-[1.3rem] lg:text-[2rem]">
                    <div>{props.name}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border p-1 w-auto h-full rounded-[5px] text-sm font-semibold">
                <div className="mt-1 font-semibold">
                  Address: <span className="text-sm font-normal">{props.address}</span>
                </div>
                <div className="mt-1 font-semibold">
                  Prepared by: <span className="text-sm font-normal">{props.user.name}</span>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )} */}

          <div className="flex flex-col justify-between  w-full h-full md:flex-row">
            <div className="flex flex-col w-[100%] md:w-[70%]">
              <div className="flex flex-row justify-start items-center">
                <div className="mr-[1.2rem] w-auto h-auto rounded-[60%]">
                  <img className="w-[55px] h-[55px] " src={Logo} alt="google" />
                </div>
                <div className="flex flex-col font-bold text-[1.3rem] lg:text-[2rem]">
                  <div>{props.name}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border p-1 w-auto h-full rounded-[5px] text-sm font-semibold">
              <div className="mt-1 font-semibold">
                Address: <span className="text-sm font-normal">Matugga</span>
              </div>
              <div className="mt-1 font-semibold">
                Prepared by: <span className="text-sm font-normal">Ssewankambo Derick</span>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default InvoiceHeader;
