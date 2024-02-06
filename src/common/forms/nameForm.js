/* eslint-disable react/prop-types */
import React from 'react';

import { formInput, labelClass } from 'common/classes';

function NameForm(props) {
  return (
    <div className="w-full flex flex-row justify-between py-1">
      <div className="flex flex-col w-1/2 mr-2">
        <label className={labelClass}>
          Enter Company name<span className="text-red-500 font-small">*</span>
        </label>
        <input
          className={formInput}
          type="text"
          name="company name"
          placeholder="Tesla Inc"
          value={props.data.name}
          onChange={props.updateName}
        />
      </div>
      <div className="flex flex-col w-1/2 ml-2">
        <label className={labelClass}>Company Address *</label>
        <input
          className={formInput}
          type="text"
          name="address"
          placeholder="Plot 102, Swangs Avenue"
          value={props.data.address}
          onChange={props.updateAddress}
        />
      </div>
    </div>
  );
}

export default NameForm;
