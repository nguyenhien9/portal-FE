import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Space, Typography, Form } from "antd";

import {
  CustomTable,
  CustomButton,
  Toolbar,
  CustomForm,
  AddingModal,
} from "../../components";
import { useServiceContext, useModalContext } from "../../contexts";
import { showConfirm } from "../../utils/showConfirm";
import {
  getAllServices,
  createService,
  getPage,
  deleteService,
} from "../../api/serviceApi";
import { serviceFormConfig } from "../../constants/formConfig";

const Service = () => {
  const { dispatch, services, page, limit, isLoading, totalServices } =
    useServiceContext();

  const [form] = Form.useForm();
  const handleFinish = (values) => {
    createService(dispatch, values);
    form.resetFields();
  };
  const handleResetForm = () => {
    form.resetFields();
  };
  const handleChangePage = (pagination) => {
    const { current, pageSize } = pagination;
    getPage(dispatch, current, pageSize);
  };
  const handleDelete = async (id, service_name) => {
    try {
      showConfirm({
        title: "Delete service",
        content: <p>Bạn có muốn xóa {service_name}?</p>,
        onConfirm: async () => {
          await deleteService(dispatch, id);
        },
      });
    } catch (error) {
      console.error("Delete action was canceled or failed:", error);
      // Handle or display error message if needed
    }
  };
  useEffect(() => {
    getAllServices(dispatch, page, limit);
  }, [dispatch, page, limit]);

  const { openModal, isModalOpen, closeModal } = useModalContext();
  const columns = [
    { title: "Service code", dataIndex: "service_code", key: "service_code" },
    { title: "Service Name", dataIndex: "service_name", key: "service_name" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="middle">
          <CustomButton type="text" text="Update" icon={<EditOutlined />} />
          <CustomButton
            type="text"
            text="Delete"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id, record.service_name)}
          />
        </Space>
      ),
    },
  ];

  const dataSources = services?.map((service) => ({
    ...service,
    key: service.id,
  }));

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
        <CustomTable
          dataSources={dataSources}
          columns={columns}
          loading={isLoading}
          pagination={{
            current: page,
            pageSize: limit,
            total: totalServices,
            showSizeChanger: false,
          }}
          onTableChange={handleChangePage}
        />
      </div>
      <div>
        {isModalOpen && (
          <AddingModal
            title={
              <Typography.Title level={3} style={{ color: "#147afa" }}>
                Add new service
              </Typography.Title>
            }
            open={isModalOpen}
            onClose={() => closeModal()}
          >
            <CustomForm
              form={form}
              formConfig={serviceFormConfig}
              onFinish={handleFinish}
              onReset={handleResetForm}
            />
          </AddingModal>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Service;
