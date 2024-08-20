import { Toolbar } from "../../components";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

import { CustomTable } from "../../components";
import { useServiceContext } from "../../contexts/serviceSlice";
import { getAllServices } from "../../api/serviceApi";
import { useEffect } from "react";
import { Space } from "antd";
import CustomButton from "../../components/button";
const Service = () => {
  const { dispatch, services, page, totalPages, isLoading } =
    useServiceContext();
  useEffect(() => {
    getAllServices(dispatch);
  }, [dispatch]);
  const columns = [
    { title: "No", dataIndex: "id", key: "id" },
    { title: "Service code", dataIndex: "service_code", key: "service_code" },
    { title: "Service Name", dataIndex: "service_name", key: "service_name" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <CustomButton text="Update" icon={<EditOutlined />} />
          <CustomButton text="Delete" danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];
  const handleChangePage = (page) => {
    getAllServices(dispatch, page);
  };
  return (
    <div>
      <Toolbar
        text="Services Management"
        buttons={[
          {
            text: "Add Service",
            type: "primary",
            onClick: () => console.log("first"),
            icon: <PlusOutlined />,
          },
        ]}
      />
      <div>
        <CustomTable
          dataSources={services}
          columns={columns}
          pagination={{
            current: page,
            totalPages: totalPages,
            onChange: handleChangePage,
          }}
        />
      </div>
    </div>
  );
};

export default Service;
