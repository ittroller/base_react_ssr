import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const PublicLayout = props => {
  const { Header, Content, Footer } = Layout;

  const listMenus = [
    { key: 'home', label: 'Home', url: '/' },
    { key: 'blogs', label: 'Blogs', url: '/blogs' },
    { key: 'about', label: 'About', url: '/about' },
    { key: 'login', label: 'Login', url: '/login' },
    { key: 'register', label: 'Register', url: '/register' },
  ];

  return (
    <div className="public-layout">
      <Layout className="layout">
        <Header className="header-menu">
          <div className="logo">
            <div>Logo</div>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}>
            {listMenus.map(item => (
              <Menu.Item key={item.url}>
                <Link to={item.url}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>

        <Content className="content">
          <div className="site-layout-content">{props.children}</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};
export default PublicLayout;
