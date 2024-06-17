import React from 'react';
import { Layout, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Reset Ant Design default CSS
import './Header.css'; // Import CSS file

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo">
        MOVIEVENNIE
      </div>
      <Search
        placeholder="Search Movie"
        style={{ width: 300, margin: '0 10px' }}
      />
      <div className="avatar">
        <UserOutlined />
      </div>
    </Header>
  );
};

export default AppHeader;
