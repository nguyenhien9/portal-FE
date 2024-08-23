import React from "react";
import { Toolbar } from "../../components";

const Staff = () => {
  return <div>
    <Toolbar text="Staffs Management" buttons={[
      { text: 'Add Staff', type: 'primary', onClick: () => console.log("first") },
    ]} />
  </div>;
};

export default Staff;
