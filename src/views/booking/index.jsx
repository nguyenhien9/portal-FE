import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { Space, Typography, Form, Tag } from "antd";

import {
  CustomTable,
  CustomButton,
  Toolbar,
  CustomForm,
  AddingModal,
} from "../../components";
import { useBookingContext, useModalContext } from "../../contexts";
import { showConfirm } from "../../utils/showConfirm";
import { fetchBookings, createBookings } from "../../api/bookingApi";
import { bookingFormConfig } from "../../constants/formConfig";

const Booking = () => {
  const { dispatch, bookings, page, limit, isLoading, totalPages } =
    useBookingContext();
  const [form] = Form.useForm();
  const handleResetForm = () => {
    form.resetFields();
  };
  const handleFinish = (values) => {
    createBookings(dispatch, values);
    form.resetFields();
  };
  // const handleChangePage = (pagination) => {
  //   const { current, pageSize } = pagination;
  //   if (pageSize !== limit) {
  //     getPage(dispatch, current, pageSize);
  //   } else {
  //     getPage(dispatch, current);
  //   }
  // };
  // const handleDelete = async (id, full_name) => {
  //     try {
  //         showConfirm({
  //             title: "Delete customer",
  //             content: <p>Bạn có muốn xóa {full_name}?</p>,
  //             onConfirm: async () => {
  //                 await deleteCustomer(dispatch, id);
  //             },
  //         });
  //     } catch (error) {
  //         console.error("Delete action was canceled or failed:", error);
  //     }
  // };
  useEffect(() => {
    fetchBookings(dispatch, page, limit);
  }, [dispatch, page, limit]);

  const { openModal, isModalOpen, closeModal } = useModalContext();

  const columns = [
    {
      title: "Booking Code",
      dataIndex: "booking_code",
      key: "booking_code",
      sorter: true,
    },
    {
      title: "Customer Code",
      dataIndex: "customer_code",
      key: "customer_code",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    { title: "Service", dataIndex: "service_name", key: "service_name" },
    { title: "Staff Code", dataIndex: "staff_code", key: "staff_code" },
    { title: "Staff Name", dataIndex: "staff_name", key: "staff_name" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case 0:
            return (
              <Tag color="#2db7f5" bordered={false}>
                Waiting
              </Tag>
            );
          case 1:
            return (
              <Tag color="#87d068" bordered={false}>
                On progress
              </Tag>
            );
          case 2:
            return (
              <Tag color="#108ee9" bordered={false}>
                Done
              </Tag>
            );
          case 3:
            return (
              <Tag color="#f50" bordered={false}>
                Cancel
              </Tag>
            );
          default:
            return <Tag color="default">Unknown</Tag>;
        }
      },
    },
    { title: "Notes", dataIndex: "notes", key: "notes" },
    { title: "Date", dataIndex: "booking_date", key: "booking_date" },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size="small">
          <CustomButton type="text" text="Update" icon={<EditOutlined />} />
          <CustomButton
            type="text"
            text="Delete"
            danger
            icon={<DeleteOutlined />}
            // onClick={() => handleDelete(record.id, record.full_name)}
          />
        </Space>
      ),
    },
  ];

  const dataSources = bookings?.map((booking) => ({
    key: booking.id,
    booking_code: booking.booking_code,
    customer_code: booking.Customer?.customer_code, // Lấy customer_code từ object Customer
    customer_name: booking.Customer?.full_name, // Lấy tên khách hàng từ object Customer
    service_name: booking.Service?.service_name, // Lấy tên dịch vụ từ object Service
    staff_code: booking.Staff?.staff_code, // Lấy staff_code từ object Staff
    staff_name: booking.Staff?.full_name, // Lấy tên nhân viên từ object Staff
    status: booking.status,
    notes: booking.notes,
    booking_date: booking.booking_date,
  }));

  return (
    <div>
      <Toolbar
        text="Booking Management"
        buttons={[
          {
            text: "Add Booking",
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
          // onTableChange={handleChangePage}
        />
      </div>
      <div>
        {isModalOpen && (
          <AddingModal
            title={
              <Typography.Title level={3} style={{ color: "#147afa" }}>
                Add new Booking
              </Typography.Title>
            }
            open={isModalOpen}
            onClose={() => closeModal()}
          >
            <CustomForm
              form={form}
              formConfig={bookingFormConfig}
              onFinish={handleFinish}
              onReset={handleResetForm}
            />
          </AddingModal>
        )}
      </div>
    </div>
  );
};

export default Booking;
