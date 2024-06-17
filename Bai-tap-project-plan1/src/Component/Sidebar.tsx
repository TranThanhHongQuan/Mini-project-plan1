import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, FireOutlined, CompassOutlined, VideoCameraOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      width={200}
      style={{
        background: '#1c1c1c',
        color: '#fff',
        position: 'sticky',  
        top: 0,              
        height: '100vh',     
        overflowY: 'auto',    
      }}
    >
      <Menu
        mode="vertical"
        defaultSelectedKeys={['1']}
        style={{ background: '#1c1c1c', color: '#fff' }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />} style={{ marginBottom: 20 }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FireOutlined />} style={{ marginBottom: 20 }}>
            <Link to="#popular-movies" style={{ color: '#fff' }}>Trending</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<CompassOutlined />} style={{ marginBottom: 20 }}>
             <Link to="/explore" style={{ color: '#fff' }}>Explore</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<VideoCameraOutlined />} style={{ marginBottom: 20 }}>
             <Link to="/movies" style={{ color: '#fff' }}>Movies</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<HeartOutlined />} style={{ marginBottom: 20 }}>
              <Link to="/favorites" style={{ color: '#fff' }}>Favorite</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
