import React from "react";
import { Table } from "antd";

const CustomTable = ({
  columns,
  dataSources,
  loading,
  pagination,
  onTableChange,
  ...others
}) => {
  const updateDataSources = dataSources?.map((item, i) => ({
    ...item,
    no: i + 1,
  }));
  return (
    <Table
      size="large"
      tableLayout="auto"
      columns={columns}
      dataSource={updateDataSources}
      pagination={pagination}
      loading={loading}
      onChange={onTableChange}
      {...others}
    />
  );
};

export default CustomTable;
