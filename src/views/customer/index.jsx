import React from "react";
import { Toolbar } from "../../components";

const Customer = () => {
  return <div>
    <Toolbar text="Customers Management" buttons={[
      { text: 'Add Customer', type: 'primary', onClick: () => console.log("first") },
    ]} />
  </div>;
};

export default Customer;
