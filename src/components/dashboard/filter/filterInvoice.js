import React from 'react';
import { DatePicker } from 'antd';

import { Options } from 'constants/invoiceOptions';
import { selectInput, formInput } from 'common/classes';

function FilterInvoice() {
  return (
    <div className=" my-2 space-y-2 flex flex-col w-full shadow-lg items-center bg-white border rounded justify-between px-5 h-auto md:flex-row items-center  lg:flex-row xl:flex-row">
      <div>
        <input className={formInput} placeholder="serach invoice" />
      </div>
      <div>
        <select className={selectInput}>
          {Options.map((option) => (
            <option key={option.id}>{option.name}</option>
          ))}
        </select>
      </div>

      <div>
        <span>From</span> <DatePicker />
      </div>
      <div>
        <span>To</span> <DatePicker />
      </div>
    </div>
  );
}

export default FilterInvoice;
