/* eslint-disable react/prop-types */

import { Select } from "antd";
const CustomSelect = ({ options, defaultValue, ...others }) => {
  return <Select options={options} defaultValue={defaultValue} {...others} />;
};

export default CustomSelect;
