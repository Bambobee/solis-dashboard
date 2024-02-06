/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Checkbox } from 'antd';

function Terms(props) {
  // const [agree, setAgree]=useState(false)
  return (
    <>
      <div className="w-[70%] flex flex-col items-left">
        <h3 className="mt-2 text-2xl font-bold text-gray-900">Solis Terms and Privacy Policy</h3>
        <div>
          <h3 className="mt-2 text-normal font-bold text-gray-900">Terms of Service</h3>
          I'm excited to be applying for the Software Engineer position at NFT. As someone who is
          highly focused and attentive to detail, I am attracted to building solutions that add
          value to the end user. I'm thrilled at the opportunity to show off my technical expertise
          and leadership skills as part NFT Engineering team. Throughout my career, I have
          contributed to positive business results through effective organization, prioritization
          and follow-through of key organizational projects.
          <h3 className="mt-2 text-normal font-bold text-gray-900">Data Policy</h3>
          will bring immediate value to NFT In my former Software Engineer role, I exercised a
          calculated and methodical approach to problem-solving. While I am independently motivated,
          I appreciate collective efforts and collaborate productively within group settings.
          Moreover, I am competent in software development and technical analysis with proficiency
          in Java (springboot) JavaScript/TypeScript (React js, node js-express) and python
          (Django). This opportunity is especially exciting as my professional goals align with
          NFT’s mission and values. Further, my communication, decision-making and critical thinking
          abilities will...
          <div className="flex flex-col h-auto justify-between mt-[1rem]">
            <a
              href="/#"
              className="font-bold text-2xl-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
              Read more about our policies and terms of service
            </a>
            <Checkbox name="remember" checked={props.data} onChange={props.decline}>
              I agree
            </Checkbox>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;
