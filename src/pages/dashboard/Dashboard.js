import React, { useEffect, useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { LogoutOutlined, BellOutlined, LoadingOutlined } from '@ant-design/icons';
import Top from './head/header.js';

import { Outlet } from 'react-router-dom';
import './card/style.css';
import { useAuth } from '../../context/AuthContext';
import SideMenu from '../../components/ui/Menu';
import './card/style.css'
// import Home from './home/Home';
// import EmailVerification from '../../components/dashboard/EmailVerification';

const { Header, Content, Footer } = Layout;

function Dashboard() {
  const antIcon = <LoadingOutlined style={{ fontSize: 75, color: '#101d2c' }} spin />;

  const { logout, auth } = useAuth();

  const [user, setUser] = useState(auth.user);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    setUser(auth.user);
  }, [auth]);
  const [close, setClose] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setClose(true);
      } else {
        setClose(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* {user.isVerified === false && <EmailVerification email={user.email} />} */}
      <Layout style={{
        minHeight: '100vh', height: 'auto', backgroundColor: '#f7f9fa', display: 'flex',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        flexDirection: 'unset',
        overflow: 'hidden'
      }} >

        <Top setClose={setClose} />

        <SideMenu close={close} />

        <Layout className="site-layout scroll" style={{ backgroundColor: '#f7f9fa' }}>
          {/* <Header
            className="flex flex-row bg-red-800 justify-end items-center text-white"
            style={{ color: 'whitesmoke', padding: 0 }}>
          <Button
              className="menu"
              type="primary"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
            />
            <Drawer
              title="Topics"
              placement="left"
              onClick={() => setVisible(false)}
              onClose={() => setVisible(false)}
              visible={visible}>
              <SideMenu />
            </Drawer> 
            <div className="flex flex-row justify-between mr-5">
              <BellOutlined />{' '}
            </div>
            Hi {user.name}
            <div className="m-2 cursor-pointer" onClick={() => logout()}>
              Logout{' '}
              <LogoutOutlined
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: '5px'
                }}
              />
            </div>
          </Header> */}

          <Content style={{ marginTop: '50px', padding: '10px', overflow: 'auto' }}>
            <div class="flex items-center justify-end pt-[20px] pr-[80px]">
              <select className="w-32 h-9 rounded-lg text-gray-400 pl-4 pr-1 bg-white border border-gray-300 focus:outline-none">
                <option value="0">2022</option>
                <option value="0">2023</option>
                <option value="0">2024</option>
                <option value="0">2025</option>
              </select>
            </div>
         

            <div className=" flex flex-col w-[100%] md:w-[100%] lg:w-[90%]  xl:w-[90%] mx-[auto]">

              <Outlet />
            </div>
          </Content>

          {/* <Spin indicator={antIcon} size="large" /> */}

          <Footer style={{ textAlign: 'center' }}>Solis Inc ©2022</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
