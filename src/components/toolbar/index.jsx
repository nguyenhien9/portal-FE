import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Divider, Flex, Typography } from "antd";

import CustomButton from "../button";

const Toolbar = ({ buttons, text }) => {
  return (
    <>
      <Flex gap="middle" justify="space-between" align="center">
        <Typography.Title level={3} style={{ fontWeight: "bold" }}>
          {text}
        </Typography.Title>
        <Flex gap="small">
          {buttons.map((button, i) => (
            <CustomButton
              key={i}
              type={button.type}
              text={button.text}
              onClick={button.onClick}
              icon={<PlusOutlined />}
            />
          ))}
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Toolbar;
