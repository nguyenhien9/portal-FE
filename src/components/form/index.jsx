/* eslint-disable react/prop-types */
import { Form, Space } from 'antd'
import CustomInput from "./input"
import CustomButton from "../button"

const CustomForm = ({ formConfig, onFinish, onReset, form, initialValues }) => {



    return (
        <Form layout='vertical' onFinish={onFinish} form={form} initialValues={initialValues}>
            {formConfig.map((field) => {
                return <Form.Item key={field.name} label={field.label} name={field.name} rules={field.rules}>
                    <CustomInput {...field.inputProps} />
                </Form.Item>
            }

            )}
            <Form.Item>
                <Space style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                    <CustomButton text="Reset" danger onClick={onReset} />
                    <CustomButton text='Submit' htmlType='submit' />
                </Space>
            </Form.Item>
        </Form>
    )
}

export default CustomForm