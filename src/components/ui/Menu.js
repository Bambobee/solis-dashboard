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
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import profile from '../../pages/dashboard/head/images/boy.webp';
import { Third } from './bottom/bottom';

import { useAuth } from 'context/AuthContext';
import { useApp } from 'context/businessContext';
// import Logo from 'assets/svg/logo.svg';
import { purchaseMenuList, SalesList } from 'utils/menItem';
import './Sidebar.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu({close}) {
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

  // const { name } = {
  //   name:
  //     company !== null && company !== 'undifined' ? (
  //       company.map((a) => a.name.charAt(0).toUpperCase() + a.name.slice(1))
  //     ) : (
  //       <Spin indicator={antIcon} size="default" />
  //     )
  // };

  return (
    // <Sider
    //   style={{
    //     overflow: 'auto',
    //     height: '100vh',
    //     position: 'fixed',
    //     left: 0,
    //     top: 0,
    //     bottom: 0,

    //     borderRight: '4px solid #edf0f2',
    //     overflowX: 'hidden',
    //     paddingTop: '72.46px',
    //     // transition: 'all .5s ease-in-out',
    //     width: '291px',
    //     backgroundColor: 'unset'
    //   }}
    // breakpoint={'lg'}
    // theme="light"
    // collapsedWidth={0}
    // trigger={null}

    //   collapsed={collapse}
    // onCollapse={onCollapse}>
    <aside className={close ? "scroll sidebar close":"sidebar scroll" } >
      {/* <div className="h-[3.8rem] flex flex-row justify-start px-[5px] py-1 rounded-[25px] items-center ">
        <div className="min-w-[90%] flex flex-row items-center justify-start rounded-[35px] cursor-pointer  py-0 mx-auto hover:bg-gray-800">
          <img className="w-[45px] h-[45px] " src={Logo} alt="logo" />{' '}
          <span className="font-normal flex items-center justify-center text-white text-[16px]">
            {name}
          </span>
        </div>
      </div> */}
      <div className='h-auto top relative w-[12rem] left-[4.375rem]' >
        <div className='w-[100%] h-[3.196875rem] flex justify-between items-center'>
          <img src={profile} className="w-[60px] h-[51.5px]" style={{
            borderRadius: '10px',
            boxShadow: '0px 2px 4px 0px #405E800A'
          }} alt="Avatar" />
          <span style={{
            fontSize: '13px',
            fontWeight: '700',
            color: ' #98A1B3'
          }}>Hi,Benard</span>
          <span style={{
            color: '#B8C1CC',
            marginRight: '5px'
          }}><FaArrowRightLong /></span>
        </div>
        <div className="relative bg-white w-full h-[17.9px] mt-[15px] flex justify-center items-center"
        style={{
          boxShadow: '0px 2px 4px 0px #405E800A',
          borderRadius: '15px',
        }}>
          <div className="w-[175px] h-[4.26px]" style={{
            borderRadius: '15px',
            background: '#edf0f2'
          }}>
            <div className="w-[117px] h-[4.26px]" style={{
              borderRadius: '15px',
              boxShadow: '0px 9px 14px 0px #0077FF33',
              background: 'linear-gradient(180deg, #00AFFF 0%, #0077FF 100%)'
            }}></div>
          </div>
        </div>
        <div className="w-[202px] h-[46.89px] mt-[25px] -ml-[5px] flex items-center justify-evenly"
      style={{
          background: '#2F4D88',
          boxShadow: '0px 5px 10px 0px #405E8005',
          borderRadius: '15px',
        }}>
          <FaCalendar style={{
            width: '25px',
            height: '21.31px',
            padding: '2.89px, 3.17px, 3.09px, 3.17px',
            color: '#97a6c3'
          }} />
          <p style={{
            textShadow: '2px 2px 4px #0086ff',
            fontSize: '13px',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: ' unset'
          }}>Invoices</p>
          <span style={{
            color: '#B8C1CC',
            marginRight: '5px'
          }}><FaArrowRightLong /></span>
        </div>
      </div>
      <Menu defaultSelectedKeys={['2']} mode="inline" className='nav' style={{
        marginTop: 0, backgroundColor: 'unset', borderRadius: 'unset',
        width: '203px',
        height: 'auto',
        position: 'relative',
        left: '70px',
        paddingTop: '15px'
      }}>
        <Menu.Item key={1} icon={<PieChartOutlined style={{fontSize: '20px'}}/>}>
          <Link style={{fontWeight: 700, color: '#606A80' }} to={'home'}>Home</Link>
        </Menu.Item>
        <SubMenu style={{fontWeight: 700, color: '#606A80' }}  key={2} icon={<MoneyCollectOutlined style={{fontSize: '20px'}} />} title="Sales">
          {SalesList.map((el) => (
            <Menu.Item style={{borderLeft: '2px solid #b8c1cc',color: '#606a80',
            fontWeight: '400',
            lineHeight: '30px', marginBottom: 'unset'}} key={el.id}>
              <Link  key={el.id} to={el.link}>
                {el.title}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu style={{fontWeight: 700, color: '#606A80' }}  key={3} icon={<LineChartOutlined style={{fontSize: '20px'}} />} title="Expenses">
          {purchaseMenuList.map((elment) => (
            <Menu.Item style={{borderLeft: '2px solid #b8c1cc',color: '#606a80',
            fontWeight: '400',
            lineHeight: '30px',marginBottom: 'unset'}} key={elment.id}>
              <Link to={elment.link}>{elment.title}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Item style={{fontWeight: 700, color: '#606A80' }}  key={8} icon={<StockOutlined style={{fontSize: '20px'}} />}>
          Inventory
        </Menu.Item>
        <Menu.Item style={{fontWeight: 700, color: '#606A80' }} key={5} icon={<FileOutlined  style={{fontSize: '20px'}}/>}>
          Reports
        </Menu.Item>
        <Menu.Item style={{fontWeight: 700, color: '#606A80',paddingTop:'15px' }} key={5} icon={<SettingOutlined style={{fontSize: '20px'}}/>}>
          Settings
        </Menu.Item>
        {/* {user.role === 'owner' ? (
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
        )} */}
      </Menu>

      <Third />
    </aside>
    // </Sider>
  );
}

export default SideMenu;
