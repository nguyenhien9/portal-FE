/* eslint-disable react/prop-types */

import { Input } from "antd";
const CustomInput = ({
  type = "text",

  value,
  onChange,
  status,
  ...others
}) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={onChange}
      status={status}
      {...others}
    />
  );
};

export default CustomInput;
