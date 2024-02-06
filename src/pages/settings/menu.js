import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import { FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Title } = Typography;

const { SubMenu } = Menu;

function SideMenu() {
  const [collapse, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Sider collapsible collapsed={collapse}>
      <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" style={{ marginTop: 27 }}>
        <Menu.Item key={1}>
          <Title
            onClick={onCollapse}
            style={{ color: 'white', paddingTop: '5px' }}
            level={4}
            italic>
            Settings
          </Title>
        </Menu.Item>
        <SubMenu key={11} icon={<TeamOutlined />} title="User Managment">
          <Menu.Item key={2}>
            <Link to="#">users</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key={3} icon={<UserOutlined />} title="Sales">
          <Menu.Item key={31}>Invoices</Menu.Item>
          <Menu.Item key={32}>Customers</Menu.Item>
          <Menu.Item key={4}>Products</Menu.Item>
        </SubMenu>
        <SubMenu key={41} icon={<TeamOutlined />} title="Accounting">
          <Menu.Item key={5}>Personal</Menu.Item>
        </SubMenu>
        <Menu.Item key={6} icon={<FileOutlined />}>
          Others
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideMenu;
