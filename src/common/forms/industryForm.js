/* eslint-disable react/prop-types */
import React from 'react';

import { formDiv, labelClass, selectInput } from 'common/classes';
import { industry } from 'utils/industry';

function IndustryForm(props) {
  return (
    <div className={formDiv}>
      <div className="flex flex-col w-full p-0 m-0">
        <label className={labelClass}>
          Select industry<span className="text-red-500 font-small">*</span>
        </label>
        <select
          className={selectInput}
          style={{ backgroundColor: 'white' }}
          value={props.industry}
          onChange={props.updateIndustry}>
          {industry.map((elment, index) => (
            <option key={index}>{elment}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-[100%] ml-0 md:w-[50%] lg:w-[50%] xl:ml-1">
        <label className={labelClass}>Select currency *</label>
        <select
          className={selectInput}
          style={{ backgroundColor: 'white' }}
          value={props.countryCode}
          onChange={props.updateCurrency}>
          <option>{props.countryCode}</option>
          <option>USD</option>
        </select>
      </div>
    </div>
  );
}

export default IndustryForm;
