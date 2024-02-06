import React, { useEffect, useState } from 'react';
import { Layout, Spin, Breadcrumb } from 'antd';
import { LogoutOutlined, BellOutlined, LoadingOutlined } from '@ant-design/icons';

import { Outlet } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import SideMenu from '../../components/ui/Menu';
import EmailVerification from '../../components/dashboard/EmailVerification';

const { Header, Content, Footer } = Layout;

function Dashboard() {
  const antIcon = <LoadingOutlined style={{ fontSize: 75, color: '#101d2c' }} spin />;

  const { logout, auth } = useAuth();

  const [user, setUser] = useState(auth.user);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    setUser(auth.user);
  }, [auth]);

  return (
    <>
      {user.isVerified === false && <EmailVerification email={user.email} />}
      <Layout style={{ minHeight: '100vh', height: 'auto' }} hasSider>
        <SideMenu />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="flex flex-row bg-red-800 justify-end items-center text-white"
            style={{ color: 'whitesmoke', padding: 0 }}>
            {/* <Button
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
            </Drawer> */}
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
          </Header>
          {user ? (
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item>home</Breadcrumb.Item>
              </Breadcrumb>
              <div className=" flex flex-col w-[100%] md:w-[100%] lg:w-[90%]  xl:w-[90%] mx-[auto]">
                <Outlet />
              </div>
            </Content>
          ) : (
            <Spin indicator={antIcon} size="large" />
          )}
          <Footer style={{ textAlign: 'center' }}>Solis Inc ©2022</Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
