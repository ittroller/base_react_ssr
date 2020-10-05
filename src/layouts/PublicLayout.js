import React from 'react';
import { Layout, Menu } from 'antd';

const PublicLayout = props => {
  const { Header, Content, Footer } = Layout;

  return (
    <div className="public-layout">
      <Layout className="layout">
        <Header className="header-menu">
          <div className="logo">
            <div>Logo</div>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Menu 1</Menu.Item>
            <Menu.Item key="2">Menu 2</Menu.Item>
            <Menu.Item key="3">Menu 3</Menu.Item>
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
