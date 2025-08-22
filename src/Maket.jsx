import { Layout, Menu } from 'antd';
import { topics } from './Topics';
import Test from './Test';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';
import { Link } from 'react-router';
import Test2 from './Header';

const { Header, Content, Sider, Footer } = Layout;

const Maket = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <Test2 />
      </Header>

      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[...topics].map((t, i) => ({
              key: i + 1,
              label: <Link to={t.path}>{t.title}</Link>,
            }))}
          />
        </Sider>

        <Content
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 64px - 70px)',
            margin: 0,
            padding: 24,
            background: '#fff',
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:topic" element={<Test />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Content>
      </Layout>

      <Footer style={{ textAlign: 'center' }}>
        ©2025 Created by PetrKornev
      </Footer>
    </Layout>
  );
};

export default Maket;
