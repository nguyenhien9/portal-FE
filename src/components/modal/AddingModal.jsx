import { Modal } from "antd";


const AddingModal = ({
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

export default AddingModal;
