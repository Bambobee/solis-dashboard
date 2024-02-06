/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { Spin, Layout, Breadcrumb } from 'antd';
import { LoadingOutlined, ArrowLeftOutlined } from '@ant-design/icons';
// import MoreOptions from 'assets/svg/vertical.svg';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import { useApp } from 'context/businessContext';
import { useAuth } from 'context/AuthContext';
import SideMenu from './menu';
import InviteUser from 'components/dialog/inviteUser';
import { openNotificationWithIcon } from 'common/notifications/Notification';
const { Content } = Layout;

function Settings() {
  const location = useLocation();

  const antIcon = <LoadingOutlined style={{ fontSize: 75, color: '#101d2c' }} spin />;

  const { product, fetchSingleBusiness } = useApp();

  const { auth } = useAuth();
  const { id } = useParams();

  const [user, setUser] = useState(auth.user);
  const [company, setCompany] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [members, setMember] = useState();

  useEffect(() => {
    setUser(auth.user);
  }, [auth]);

  useEffect(() => {
    fetchSingleBusiness({ id });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (product.addTeamMemberSuccess) {
        openNotificationWithIcon('success', product.message);
        setVisible(false);
      }
    }, 500);

    if (product.fetchSingleBusinessSucess || product.singleBusiness) {
      setCompany(product.singleBusiness);
      setMember(product.singleBusiness.members);
      setLoading(false);
    }
    return () => clearTimeout(timer);
  }, [product]);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(!visible);
  };
  return (
    <>
      {visible && <InviteUser close={handleClose} />}

      {user === 'undefined' || user.role !== 'owner' ? (
        <Navigate
          to="/forbidden"
          replace
          state={{
            referrer: location.pathname,
            from: location
          }}
        />
      ) : (
        <Layout style={{ minHeight: '100vh', height: 'auto' }}>
          <SideMenu />
          <Layout className="site-layout">
            <div className="m-[2rem]">
              <Breadcrumb.Item>
                <Link to="/dashboard/home">
                  <ArrowLeftOutlined className="mr-[5px]" />
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Settings</Breadcrumb.Item>
            </div>

            {loading ? (
              <Spin indicator={antIcon} size="large" />
            ) : (
              <Content>
                <div className="flex flex-col m-auto w-3/5 h-auto drop-shadow-xl rounded-xl px-2">
                  <div className="flex flex-row justify-between py-5">
                    <h1 className="mt-4 text-[2rem]  font-bold text-gray-900">
                      {company.name.charAt(0).toUpperCase() + company.name.slice(1)} User Group
                    </h1>
                    <div className="flex flex-row w-auto justify-between items-center">
                      <button
                        onClick={handleOpen}
                        className="flex justify-center bg-gray-900 
                  hover:bg-gray-600 text-gray-100 px-3 py-2
                  rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer 
                  transition ease-in duration-500">
                        Invite user
                      </button>
                    </div>
                  </div>
                  <div className="text-[1.05rem] font-semibold">
                    You can invite a new user to access your business account. Only give access to
                    people you trust, since users can see your transactions
                  </div>

                  <div className=" flex flex-col justify-start border rounded mt-[2rem] min-h-[5rem]">
                    <div className="flex flex-col justify-between px-5 py-3 h-[5rem]w-[100%] font-normal border-b">
                      <div className="flex flex-row justify-between items-center h-[3.5rem]">
                        <div>{company.creator}</div>{' '}
                        <button
                          className="flex justify-center border-[2px]
                    text-gray-900 py-1 mx-2 px-1 rounded-[35px] tracking-wide font-normal  cursor-pointer 
                    transition ease-in duration-500">
                          Manage your profile
                        </button>
                      </div>
                      <div>Owner</div>
                    </div>
                    {members !== null || 'undefined'
                      ? members.map((elment, id) => (
                          <div
                            key={id}
                            className="flex flex-col justify-between px-5 py-3 h-[5rem]w-[100%] font-normal border-b">
                            <div className="flex flex-row justify-between items-center h-[3.5rem]">
                              <div>{elment.email}</div>
                              <span>{elment.name}</span> <Dropdown />
                            </div>
                            <div>{elment.role}</div>
                          </div>
                        ))
                      : ''}
                  </div>
                </div>
              </Content>
            )}
          </Layout>
        </Layout>
      )}
    </>
  );
}

export default Settings;
