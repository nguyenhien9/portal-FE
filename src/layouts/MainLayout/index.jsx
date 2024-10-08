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
  AreaChartOutlined,
  AccountBookOutlined,
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

  const menuItems = [
    {
      key: "dashboard",
      icon: <AreaChartOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "booking",
      icon: <AccountBookOutlined />,
      label: <Link to="/booking">Booking</Link>,
    },
    {
      key: "customer",
      icon: <DollarCircleOutlined />,
      label: <Link to="/customer">Customer</Link>,
    },
    {
      key: "staff",
      icon: <UserOutlined />,
      label: <Link to="/staff">Staff</Link>,
    },
    {
      key: "service",
      icon: <CustomerServiceOutlined />,
      label: <Link to="/service">Service</Link>,
    },
  ];
  // Xác định key được chọn dựa trên đường dẫn hiện tại
  const selectedKey = location.pathname.split("/")[1] || "dashboard";
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

  const enhancedBreadcrumbItems = [
    { path: "dashboard", url: "/dashboard" },
    ...breadcrumbItems,
  ];
  const breadcrumbs = [
    {
      key: "dashboard",
      title: (
        <Link to="/dashboard">
          <HomeOutlined />
        </Link>
      ),
    },
    ...enhancedBreadcrumbItems.map((item, index) => ({
      key: index.toString(),
      title: (
        <Link to={item.url}>
          {item.path.charAt(0).toUpperCase() + item.path.slice(1)}
        </Link>
      ),
    })),
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: "10vh" }} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
        ></Menu>
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
          <Breadcrumb items={breadcrumbs} />
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
