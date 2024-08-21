import { Form } from "antd";
import React from "react";
import CustomInput from "../input";
import CustomButton from "../../button";

const ServiceForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      style={{ marginTop: "20px" }}
      labelCol={{
        span: 6,
      }}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Service Code"
        name="serviceCode"
        rules={[
          {
            required: true,
            max: 5,
            message: "Please input service code {E.g: S0001}!",
          },
        ]}
      >
        <CustomInput placeholder="E.g: S0001" defaultValue="S00" />
      </Form.Item>
      <Form.Item
        label="Service Name"
        name="serviceName"
        rules={[{ required: true, message: "Please input service name!" }]}
      >
        <CustomInput placeholder="E.g: Giúp việc ở lại" />
      </Form.Item>
    </Form>
  );
};

export default ServiceForm;
