/* eslint-disable react/prop-types */
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { formDiv, formInput, labelClass } from 'common/classes';
const iputClass = `
 w-full text-base px-1 py-[5px] border border-gray-300 focus:outline-none rounded-[5px] focus:border-indigo-500
`;
function ContactForm(props) {
  return (
    <div className={formDiv}>
      <div className="flex flex-col w-[100%] mr-0 md:w-[50%] lg:w-[50%] mr-2">
        <label className={labelClass}>
          Enter Telephone<span className="text-red-500 ">*</span>
        </label>
        <PhoneInput
          inputStyle={{
            width: `w-[100%] md:w-auto lg:w-auto xl:[50%]`
          }}
          country={props.code}
          onlyCountries={['ug', 'ke', 'tz', 'ss', 'cd']}
          regions={['africa']}
          inputClass={iputClass}
          value={props.contact}
          onChange={props.updateContact}
        />
      </div>
      <div className="flex flex-col w-[100%] ml-0 md:w-[50%] lg:w-[50%] xl:ml-2">
        <label className={labelClass}> Enter Business email *</label>
        <input
          className={formInput}
          type="text"
          name="email"
          value={props.email}
          onChange={props.updateBusiness}
        />
      </div>
    </div>
  );
}

export default ContactForm;
