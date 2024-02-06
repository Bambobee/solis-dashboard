import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  StockOutlined,
  LineChartOutlined,
  FileOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Spin } from 'antd';

import { useAuth } from 'context/AuthContext';
import { useApp } from 'context/businessContext';
import Logo from 'assets/svg/logo.svg';
import { purchaseMenuList, SalesList } from 'utils/menItem';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu() {
  const antIcon = <LoadingOutlined style={{ color: '#101d2c' }} spin />;
  const { auth } = useAuth();
  const { product, fetchCompany } = useApp();

  useEffect(() => {
    fetchCompany();
  }, []);

  const [company, setCompany] = useState(product.business);
  const [user, setUser] = useState(auth.user);

  const [collapse, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    setUser(auth.user);
  }, [auth]);

  useEffect(() => {
    if (product.business || product.businessFetchSuccess) {
      // fetchCompany()
      setCompany(product.business);
    }
  }, [product]);

  const { name } = {
    name:
      company !== null && company !== 'undifined' ? (
        company.map((a) => a.name.charAt(0).toUpperCase() + a.name.slice(1))
      ) : (
        <Spin indicator={antIcon} size="default" />
      )
  };

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
      // breakpoint={'lg'}
      // theme="light"
      // collapsedWidth={0}
      // trigger={null}
      collapsed={collapse}
      onCollapse={onCollapse}>
      <div className="h-[3.8rem] flex flex-row justify-start px-[5px] py-1 rounded-[25px] items-center ">
        <div className="min-w-[90%] flex flex-row items-center justify-start rounded-[35px] cursor-pointer  py-0 mx-auto hover:bg-gray-800">
          <img className="w-[45px] h-[45px] " src={Logo} alt="logo" />{' '}
          <span className="font-normal flex items-center justify-center text-white text-[16px]">
            {name}
          </span>
        </div>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" style={{ marginTop: 0 }}>
        <Menu.Item key={1} icon={<PieChartOutlined />}>
          <Link to={'home'}>Home</Link>
        </Menu.Item>
        <SubMenu key={2} icon={<MoneyCollectOutlined />} title="Sales">
          {SalesList.map((el) => (
            <Menu.Item key={el.id}>
              <Link key={el.id} to={el.link}>
                {el.title}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key={3} icon={<LineChartOutlined />} title="Expenses">
          {purchaseMenuList.map((elment) => (
            <Menu.Item key={elment.id}>
              <Link to={elment.link}>{elment.title}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item key={8} icon={<StockOutlined />}>
          Inventory
        </Menu.Item>
        <Menu.Item key={5} icon={<FileOutlined />}>
          Reports
        </Menu.Item>
        {user.role === 'owner' ? (
          <Menu.Item key={6} icon={<SettingOutlined />}>
            {company !== null && company !== 'undifined' ? (
              company.map((comp) => (
                <Link key={comp._id} to={`/settings/${comp._id}/users`}>
                  Settings
                </Link>
              ))
            ) : (
              <Link to={`/settings/`}>Settings</Link>
            )}
          </Menu.Item>
        ) : (
          ''
        )}
      </Menu>
    </Sider>
  );
}

export default SideMenu;
