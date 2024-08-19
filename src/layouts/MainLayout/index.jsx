import { useState, Suspense } from "react";
import { Layout, Menu, Button, Spin, Breadcrumb } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  HomeOutlined,
  CustomerServiceOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Spin size="large" />
  </div>
);

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // Tạo breadcrumbs dựa trên route hiện tại
  const breadcrumbItems = location.pathname
    .split("/")
    .filter((i) => i)
    .map((path, index) => {
      const url = `/${location.pathname
        .split("/")
        .slice(1, index + 2)
        .join("/")}`;
      return {
        path,
        url,
      };
    });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: "10vh" }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DollarCircleOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/user">User</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CustomerServiceOutlined />}>
            <Link to="/service">Service</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Breadcrumb>
            <Breadcrumb.Item key="home">
              <Link to="/home">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={item.url}>
                  {item.path.charAt(0).toUpperCase() + item.path.slice(1)}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <Suspense fallback={<Loader />}>
            <Outlet /> {/* Render các trang con */}
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
