import { Button, Modal } from "antd";
import CustomButton from "../button";

const CustomModal = ({
  title,
  open,
  onOk,
  onCancel,
  onReset,
  onSubmit,
  children,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "5px",
          }}
        >
          <CustomButton text="Reset" danger onClick={onReset} />
          <CustomButton text="Create" type="" onClick={onReset} />
        </div>
      }
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
