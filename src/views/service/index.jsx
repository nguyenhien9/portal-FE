import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

import {
  CustomTable,
  CustomButton,
  CustomModal,
  Toolbar,
  ServiceForm,
} from "../../components";
import { useServiceContext, useModalContext } from "../../contexts";
import { getAllServices } from "../../api/serviceApi";
import { useEffect } from "react";
import { Space, Typography } from "antd";

const Service = () => {
  const { dispatch, services, page, totalPages, isLoading } =
    useServiceContext();
  useEffect(() => {
    getAllServices(dispatch);
  }, [dispatch]);
  const { openModal, isModalOpen, closeModal } = useModalContext();
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

  return (
    <div>
      <Toolbar
        text="Services Management"
        buttons={[
          {
            text: "Add Service",
            type: "primary",
            onClick: () => openModal(),
            icon: <PlusOutlined />,
          },
        ]}
      />
      <div>
        <CustomTable dataSources={services} columns={columns} />
      </div>
      <div>
        {isModalOpen && (
          <CustomModal
            title={
              <Typography.Title level={3} style={{ color: "#147afa" }}>
                Add new service
              </Typography.Title>
            }
            open={isModalOpen}
            onOk={() => console.log(isModalOpen)}
            onCancel={() => closeModal()}
          >
            <ServiceForm />
          </CustomModal>
        )}
      </div>
    </div>
  );
};

export default Service;
