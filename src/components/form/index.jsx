import { Form, Space } from "antd";
import CustomInput from "./input";
import CustomButton from "../button";
import CustomSelect from "./select";
import { positions } from "../../constants/data"; // Import các options

const CustomForm = ({ formConfig, onFinish, onReset, form, initialValues }) => {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
      initialValues={initialValues}
    >
      {formConfig.map((field) => {
        let inputComponent;
        if (field.type === "input") {
          inputComponent = <CustomInput {...field.inputProps} />;
        } else if (field.type === "select") {
          inputComponent = (
            <CustomSelect
              options={field.selectProps.options}
              {...field.selectProps}
            />
          );
        }

        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {inputComponent}
          </Form.Item>
        );
      })}
      <Form.Item>
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <CustomButton text="Reset" danger onClick={onReset} />
          <CustomButton text="Submit" htmlType="submit" />
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
