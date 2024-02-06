/* eslint-disable react/prop-types */
import React from 'react';

import Card from 'common/cards';
function OverallStatistics(props) {
  const cardData = props.data;
  return (
    <div className="flex flex-col h-auto justify-between md:flex-row lg:flex-row flex-row justify-between mt-1 items-center w-full">
      {cardData.map((data) => (
        <Card icon={data.icon} key={data.id}>
          {data.title}
          <div className="text-[0.8rem] md:text-[0.9rem]  text-gray-900 font-black">
            {data.value.toLocaleString('en-US')} UGX
          </div>
        </Card>
      ))}
    </div>
  );
}

export default OverallStatistics;
