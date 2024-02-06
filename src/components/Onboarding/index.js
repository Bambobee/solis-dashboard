/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  TwitterCircleFilled,
  LinkedinOutlined,
  YoutubeOutlined,
  InstagramOutlined
} from '@ant-design/icons';

import Team from 'assets/svg/team_work.svg';
import Manager from 'assets/svg/manager.svg';
import Analysis from 'assets/svg/analytics.svg';
import Terms from 'components/terms/Terms';
import { useAuth } from 'context/AuthContext';
import { load, noLoad } from 'common/classes';
import { openNotificationWithIcon } from 'common/notifications/Notification';
import {
  MainForm,
  SecurityForm,
  ContactForm,
  NameForm,
  UploadForm,
  IndustryForm,
  RegionSelector,
  VerifyAccount
} from 'common/forms';

function Onboarding() {
  let navigate = useNavigate();

  const { onboard, auth } = useAuth();

  const [logo, setLogo] = useState('');
  const [name, setName] = useState('');
  const [region, setRegion] = useState();
  const [email, setEmail] = useState('');
  const [uploadError, setUploadError] = useState(false);
  const [agree, setAgree] = useState(false);
  const [robot, setRobot] = useState(false);
  const [country, setCountry] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);

  const [currency, setCurrency] = useState('');
  const [website, setWebsite] = useState('');
  const [isVerified, setVerified] = useState(false);

  const [page, setPage] = useState(1);

  let code =
    country === 'Tanzania, United Republic of'
      ? 'tz'
      : country === 'Kenya'
      ? 'ke'
      : country === 'Congo, the Democratic Republic of the (Kinshasa)'
      ? 'cd'
      : country === 'South Sudan'
      ? 'ss'
      : 'ug';

  let countryCode =
    country === 'Tanzania, United Republic of'
      ? 'TSH'
      : country === 'Kenya'
      ? 'KSH'
      : country === 'Congo, the Democratic Republic of the (Kinshasa)'
      ? 'USD'
      : country === 'South Sudan'
      ? 'USD'
      : 'UGX';

  function goNext() {
    setPage((page) => page + 1);
  }
  function goBack() {
    setPage((page) => page - 1);
  }

  function handleAgree() {
    setAgree(!agree);
  }

  function handleSetRobot() {
    setRobot(!robot);
  }

  function handleContactChange(value) {
    setContact(value);
  }

  function handleVnumber(e) {
    setContact(e.target.value);
  }
  function handleBusiness(e) {
    setEmail(e.target.value);
  }

  function handleVemail(e) {
    setEmail(e.target.vale);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleIndustryChange(e) {
    setIndustry(e.target.value);
  }
  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
  }
  const handleToken = (token) => {
    if (token) {
      setRobot(true);
    }
  };
  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };
  const handleExpire = () => {
    setRobot(false);
  };
  const handleCountryChange = (val) => {
    setCountry(val);
  };
  const handleRegionChange = (val) => {
    setRegion(val);
  };
  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024) {
      alert('file exceeds 1mb size');
      return setUploadError(true);
    } else {
      setLogo(file);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrency(countryCode);
    }, 1000);
    return () => clearTimeout(timer);
  }, [country, countryCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, address, contact, industry, currency, website, country, region, email };
    setAgree(false);
    setLoading(true);
    onboard(payload);
    setLoading(false);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setVerified(true);
  };

  useEffect(() => {
    if (auth.error) {
      openNotificationWithIcon('error', auth.error);
    }
    if (auth.onBoardSuccess && auth.registrationSuccess && auth.isAuthenticated) {
      openNotificationWithIcon('success', 'Congratulations, you are all set');
      navigate('/dashboard/home');
    }
  }, [auth]);

  let progress = '0%';

  if (page === 1) {
    progress = '25%';
  }

  if (page === 2) {
    progress = '50%';
  }
  if (page === 3) {
    progress = '75%';
  }

  if (page === 4) {
    progress = '100%';
  }

  return (
    <>
      <div
        data-testid="onboardContainer"
        className="flex flex-col justify-start bg-gray-100 min-h-screen w-full">
        <Carousel
          data-testid="carousel"
          autoPlay={true}
          infiniteLoop={true}
          interval={10000}
          transitionTime={10}
          showThumbs={false}>
          <div className="w-[100%] h-[150px] bg-cover  bg-ribon-moon  text-2xl-white font-bold">
            <span className="text-[3rem] font-normal text-white w-[85%]">
              Work remotely with your entire organization
            </span>
            <img className="w-[25px] h-[100px] " src={Team} alt="google" />
          </div>
          <div className=" w-[100%] h-[150px] bg-cover  bg-no-repeat-y bg-ribon-moon  text-2xl-white font-bold">
            <span className="text-[3rem] font-normal text-white w-[85%]">
              Enjoy reltime insights of how your organization is performing
            </span>
            <img className="w-[45px] h-[110px] " src={Analysis} alt="google" />
          </div>
          <div className=" w-[100%] h-[150px] bg-cover bg-ribon-moon   font-bold">
            <span className="text-[3rem] font-normal text-white w-[85%] ">
              Manage all accounting records in one place
            </span>
            <img className="w-[85px] h-[100px] " src={Manager} alt="google" />
          </div>
        </Carousel>
        <div className="flex flex-row  bg-gray-100 mini-h-[100%]  h-auto  lg: w-screen justify-around ">
          <div className=" hidden bg-cool-pattern bg-cover md:flex w-[50%] min-h-[41rem] xl:min-h-[41rem] flex-row w-[60%]">
            <div className=" xl:w-[50%] "></div>

            <div className="flex justify-start mt-[6rem] w-[50%] h-auto text-[2.5rem] p-y-[1rem]  font-normal text-gray-900">
              Set up your business today and Manage all your records in one place from anywhere!
            </div>
          </div>
          <div className="flex flex-col w-[100%] px-1  py-2 h-auto bg-white items-center space-y  py-[2rem] px-1  md: w-[100%] lg:w-[42%]">
            {/* <div className="mb-1 text-base font-medium text-blue-700">Blue</div> */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#001529] h-2.5 rounded-full"
                style={{ width: `${progress}` }}></div>
            </div>
            {page === 1 && (
              <MainForm title="Enter Business name and Region">
                <NameForm
                  data={(name, address)}
                  updateName={handleNameChange}
                  updateAddress={handleAddressChange}
                />
                <RegionSelector
                  country={country}
                  region={region}
                  updateCountry={handleCountryChange}
                  updateRegion={handleRegionChange}
                />
                <UploadForm
                  web={website}
                  updateWeb={handleWebsite}
                  logo={logo}
                  uploadError={uploadError}
                  handleLogo={handleLogo}
                />
              </MainForm>
            )}
            {page === 2 && (
              <MainForm
                data={robot}
                update={handleSetRobot}
                title="Enter contact details and Industry">
                <ContactForm
                  email={email}
                  contact={contact}
                  code={code}
                  updateBusiness={handleBusiness}
                  updateContact={handleContactChange}
                />
                <IndustryForm
                  data={industry}
                  industry={industry}
                  countryCode={countryCode}
                  updateIndustry={handleIndustryChange}
                  updateCurrency={handleCurrencyChange}
                />
                <SecurityForm handleExpire={handleExpire} update={handleToken} />
              </MainForm>
            )}
            {page === 3 && (
              <MainForm title=" Please help us secure your business, choouse a verification mode.">
                <VerifyAccount
                  vEmail={email}
                  vNumber={contact}
                  handleVerify={handleVerify}
                  vEmailChange={handleVemail}
                  vNumberChange={handleVnumber}
                />
              </MainForm>
            )}
            {page === 4 && <Terms data={agree} decline={handleAgree} />}
            <div className="w-[90%] mt-5 flex flex-row justify-end">
              <div className="mr-[2rem]">
                {page > 1 && (
                  <button onClick={goBack} className={noLoad}>
                    Back
                  </button>
                )}
              </div>
              {page === 4 ? (
                <div>
                  {page === 4 && (
                    <button onClick={agree ? handleSubmit : null} className={agree ? noLoad : load}>
                      {loading ? 'loading...' : 'Submit'}
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  {page === 3 ? (
                    <button onClick={goNext} className={isVerified ? noLoad : load}>
                      continue
                    </button>
                  ) : (
                    page < 4 && (
                      <button onClick={goNext} className={noLoad}>
                        continue
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col min-h-[4rem] bg-white border-t text-gray-900 font-normal h-auto justify-center items-center">
          Solis Inc
          <div className="flex flex-row w-[100%] justify-center items-center">
            <TwitterCircleFilled className="px-[1rem] py-[3px] cursor-pointer" />{' '}
            <LinkedinOutlined className="px-[1rem] py-[3px] cursor-pointer" />{' '}
            <InstagramOutlined className="px-[1rem] py-[3px] cursor-pointer" />{' '}
            <YoutubeOutlined className="px-[1rem] py-[3px] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
