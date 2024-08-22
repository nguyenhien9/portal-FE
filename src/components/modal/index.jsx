import { Button, Modal } from "antd";
import CustomButton from "../button";

const CustomModal = ({
  title,
  open,
  onClose,
  children,

}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
