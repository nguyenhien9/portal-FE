import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Space, Typography, Form } from "antd";

import {
  CustomTable,
  CustomButton,
  CustomModal,
  Toolbar,
  CustomForm
} from "../../components";
import { useServiceContext, useModalContext } from "../../contexts";
import { getAllServices, createService } from "../../api/serviceApi";
import { serviceFormConfig } from "../../constants/formConfig"

const Service = () => {

  const { dispatch, services, page, isLoading, totalPages } = useServiceContext();
  const [form] = Form.useForm();

  const handleFinish = async (values) => {
    await createService(dispatch, values)
    form.resetFields();

  }
  const handleResetForm = () => {
    form.resetFields()
  }

  useEffect(() => {
    getAllServices(dispatch);
  }, [dispatch, page]);


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

  const dataSources = services?.map((service) => ({ ...service, key: service.id }));


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
        <CustomTable dataSources={dataSources} columns={columns} pagination={[{ page: totalPages }]} loading={isLoading} />
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
            onClose={() => closeModal()}
          >
            <CustomForm form={form} formConfig={serviceFormConfig} onFinish={handleFinish} onReset={handleResetForm} />
          </CustomModal>
        )}
      </div>
    </div>
  );
};

export default Service;
