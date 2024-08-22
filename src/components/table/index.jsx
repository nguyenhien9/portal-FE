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
      columns={columns}
      dataSource={dataSources}
      pagination={pagination}
      loading={loading}
      {...others}

    />
  );
};

export default CustomTable;
