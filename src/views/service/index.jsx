import React from "react";
import { Toolbar } from "../../components"
import { PlusOutlined } from "@ant-design/icons";

const Service = () => {
  return <div>
    <Toolbar text="Services Management" buttons={[
      { text: 'Add Service', type: 'primary', onClick: () => console.log("first"), icon: <PlusOutlined /> },
    ]} />
  </div>

};

export default Service;
