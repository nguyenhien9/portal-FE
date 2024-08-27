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
import { useCustomerContext, useModalContext } from "../../contexts";
import { showConfirm } from "../../utils/showConfirm";
import { fetchCustomers, createCustomer, deleteCustomer } from "../../api/customerApi";
import { customerFormConfig } from "../../constants/formConfig";

const Booking = () => {
    const { dispatch, customers, page, limit, isLoading, totalPages } =
        useCustomerContext();
    const [form] = Form.useForm();
    const handleResetForm = () => {
        form.resetFields();
    };
    const handleFinish = (values) => {
        createCustomer(dispatch, values);
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
    const handleDelete = async (id, full_name) => {
        try {
            showConfirm({
                title: "Delete customer",
                content: <p>Bạn có muốn xóa {full_name}?</p>,
                onConfirm: async () => {
                    await deleteCustomer(dispatch, id);
                },
            });
        } catch (error) {
            console.error("Delete action was canceled or failed:", error);
        }
    };
    useEffect(() => {
        fetchCustomers(dispatch, page, limit);
    }, [dispatch, page, limit]);

    const { openModal, isModalOpen, closeModal } = useModalContext();
    const columns = [
        {
            title: "Customer Code",
            dataIndex: "customer_code",
            key: "customer_code",
            sorter: true,
        },
        { title: "Full Name", dataIndex: "full_name", key: "full_name" },
        { title: "Phone Number", dataIndex: "phone_number", key: "phone_number" },
        { title: "Address", dataIndex: "address", key: "address" },
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

    const dataSources = customers?.map((customer) => ({
        ...customer,
        key: customer.id,
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
                            formConfig={customerFormConfig}
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
