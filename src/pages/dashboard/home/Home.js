import React from 'react';
import { LineChart } from 'components/charts/LineChart';
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight
} from 'components/dashboard/dashboard-wrapper/DashboardWrapper';

import data from 'constants/data';
import SummaryBox, { SummaryBoxSpecial } from 'components/dashboard/summary/summaryBox';

function Home() {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="flex flex-col m-auto w-[100%] h-auto items-center drop-shadow-xl md:w-[100%] lg:w-[100%] xl:w-[100%]">
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-row flex-grow">
              <div className="w-[100%] grid grid-cols-1 grid-col gap-1 md:grid-cols-2 lg:grid-cols-2">
                {data.summary.map((item, index) => (
                  <div
                    key={`summary-${index}`}
                    className="flex my-[0.5rem] h-[8rem] w-[100%] flex-row rounded overflow-hidden shadow-lg bg-white text-gray-600 w-[100%] md:w-[90%]  text-[14px] font-semibold items-center justify-around rounded-[5px] ">
                    <SummaryBox item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className=" m-auto w-[100%] h-[96%] md:w-[100%] lg:w-[40%]">
              <SummaryBoxSpecial item={data.revenueSummary} />{' '}
            </div>
          </div>
          <div className="text-[1.5rem] mt-[2.5rem] font-semibold text-gray-900 flex">
            {' '}
            Your Company performance matrix{' '}
          </div>
          <div className="my-[2.5rem] w-[100%] min-h-[20rem] rounded-xl px-2 border">
            <LineChart />
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="bg-blue-300 min-h-[8rem] mt-[5px] w-[100%] mb-[1rem] rounded-[5px] lg:w-[90%] h-[40%] mb-[.3rem]  ">
          <div className="title mb">Overall</div>
          {/* <OverallList /> */}
        </div>
        <div className="bg-blue-300 min-h-[8rem] my-auto w-[100%] mb-[1rem] rounded-[5px]  lg:w-[90%] h-[40%] mb-[.3rem] ">
          {/* <RevenueList /> */}
          <div className="title mb">Revenue by channel</div>
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
}

export default Home;
