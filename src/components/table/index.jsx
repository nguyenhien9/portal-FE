import React from "react";
import { Table } from "antd";

const CustomTable = ({
  columns,
  dataSources,
  loading,
  pagination,
  onUpdate,
  onDelete,
  ...others
}) => {
  return (
    <Table
      {...others}
      columns={columns}
      dataSource={dataSources}
      pagination={pagination}
      loading={loading}
    />
  );
};

export default CustomTable;
