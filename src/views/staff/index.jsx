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
import { useStaffContext, useModalContext } from "../../contexts";
import { showConfirm } from "../../utils/showConfirm";
import {
  createStaff,
  fetchStaffs,
  deleteStaff,
  getPage,
} from "../../api/staffApi";
import { staffFormConfig } from "../../constants/formConfig";

const Staff = () => {
  const { dispatch, staffs, page, limit, isLoading, totalPages } =
    useStaffContext();
  const [form] = Form.useForm();
  const handleResetForm = () => {
    form.resetFields();
  };
  const handleFinish = (values) => {
    createStaff(dispatch, values);
    form.resetFields();
  };
  const handleChangePage = (pagination) => {
    const { current, pageSize } = pagination;
    console.log("current", current);
    if (pageSize !== limit) {
      getPage(dispatch, current, pageSize);
    } else {
      getPage(dispatch, current);
    }
  };
  const handleDelete = async (id, full_name) => {
    try {
      showConfirm({
        title: "Delete service",
        content: <p>Bạn có muốn xóa {full_name}?</p>,
        onConfirm: async () => {
          await deleteStaff(dispatch, id);
        },
      });
    } catch (error) {
      console.error("Delete action was canceled or failed:", error);
    }
  };
  useEffect(() => {
    fetchStaffs(dispatch, page, limit);
  }, [dispatch, page, limit]);

  const { openModal, isModalOpen, closeModal } = useModalContext();
  const columns = [
    {
      title: "Staff Code",
      dataIndex: "staff_code",
      key: "staff_code",
      sorter: true,
    },
    { title: "Full Name", dataIndex: "full_name", key: "full_name" },
    { title: "Phone Number", dataIndex: "phone_number", key: "phone_number" },
    { title: "Position", dataIndex: "position", key: "position" },
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
            onClick={() => handleDelete(record.id, record.full_name)}
          />
        </Space>
      ),
    },
  ];

  const dataSources = staffs?.map((staff) => ({
    ...staff,
    key: staff.id,
  }));

  return (
    <div>
      <Toolbar
        text="Staff Management"
        buttons={[
          {
            text: "Add Staff",
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
            total: totalPages * limit,
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
                Add new staff
              </Typography.Title>
            }
            open={isModalOpen}
            onClose={() => closeModal()}
          >
            <CustomForm
              form={form}
              formConfig={staffFormConfig}
              onFinish={handleFinish}
              onReset={handleResetForm}
            />
          </AddingModal>
        )}
      </div>
    </div>
  );
};

export default Staff;
