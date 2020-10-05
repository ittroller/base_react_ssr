import React, { useState } from 'react';
// import EventBus from 'eventing-bus';

import { useTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';

import { Form, Input, Button, Layout, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// const options = [
//   { value: 'en', label: 'English' },
//   { value: 'vi', label: 'VietNam' },
// ];

const Login = props => {
  const { t } = useTranslation();

  const { history } = props;

  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const [account, setAccount] = useState({
    email: 'ittroller8@gmail.com',
    password: 'abc123',
  });

  const onFinish = values => {
    console.log('Received values of form: ', values);
    const { email, password } = values;
    props.login({ email, password, history });
  };

  //   const onLogin = event => {
  //     event.preventDefault();
  //     props.login({ email, password });
  //   };

  //   const changeLang = language => {
  //     i18n.changeLanguage(language.value);
  //   };

  return (
    <Row className="auth-page">
      <Col span={6}></Col>
      <Col span={12}>
        <Layout className="auth-form">
          <h3 className="head-form">{t('auth_page.label.login')}</h3>

          <Form name="normal_login" className="login-form" initialValues={account} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[{ type: 'email' }, { required: true }]}
              onChange={e => setAccount({ ...account, email: e.target.value })}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} abc="avc" placeholder="Username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              {/* <Form.Item className="remember-me" name="remember" valuePropName="checked" noStyle>
                <Checkbox className="remember-me">Remember me</Checkbox>
              </Form.Item> */}

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Layout>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};

export default withRouter(Login);

{
  /* <form onSubmit={e => onLogin(e)}>
        <div>
          <p>Email</p>
          <input placeholder="Enter email" value={email} name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <button type="button" onClick={() => changeLang(options[0])}>
        EN
      </button>
      <button type="button" onClick={() => changeLang(options[1])}>
        VN
      </button> */
}
