import React from "react";
import { Toolbar } from "../../components";

const User = () => {
  return <div>
    <Toolbar text="Users Management" buttons={[
      { text: 'Add User', type: 'primary', onClick: () => console.log("first") },
    ]} />
  </div>;
};

export default User;
