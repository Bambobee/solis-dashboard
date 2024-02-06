/* eslint-disable react/prop-types */
import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import { labelClass, selectInput } from 'common/classes';

function RegionSelector(props) {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-col w-5/6 mr-2">
        <label className={labelClass}>
          Select Country<span className="text-red-500 font-small">*</span>
        </label>
        <CountryDropdown
          topcountry={'UG'}
          whitelist={['UG', 'KE', 'TZ', 'SS', 'CD']}
          classes={selectInput}
          value={props.country}
          onChange={props.updateCountry}
        />
      </div>
      <div className="flex flex-col w-2/4 ml-2  md:w-full lg:w-1/4">
        <label className={labelClass}>Region *</label>
        <RegionDropdown
          classes={selectInput}
          country={props.country}
          value={props.region}
          onChange={props.updateRegion}
        />
      </div>
    </div>
  );
}

export default RegionSelector;
