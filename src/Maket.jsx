import { Layout, Menu } from 'antd';
import { topics } from './Utils/Topics';
import ContentConstructor from './MyComp/Content/ContentConstructor';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ErrorPage from './MyComp/ErrorPage/ErrorPage';
import { Link } from 'react-router';
import MyHeader from './MyComp/Header/MyHeader';

const { Header, Content, Sider, Footer } = Layout;

const Maket = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <MyHeader />
      </Header>

      <Layout>
        <Sider width={200}>
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
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:topic" element={<ContentConstructor />} />
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
