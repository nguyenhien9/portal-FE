import React from 'react'
import CustomButton from "../button";
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Flex, Typography } from 'antd';
const Toolbar = ({ buttons, text }) => {

    return (
        <>
            <Flex gap="middle" justify='space-between' align='center' >
                <Typography.Title level={3} style={{ fontWeight: 'bold' }}>
                    {text}
                </Typography.Title>
                <div >
                    {
                        buttons.map((button, i) => (
                            <CustomButton key={i} type={button.type} text={button.text} onClick={button.onClick} icon={<PlusOutlined />} />
                        ))
                    }
                </div>
            </Flex>
            <Divider />
        </>
    )
}

export default Toolbar