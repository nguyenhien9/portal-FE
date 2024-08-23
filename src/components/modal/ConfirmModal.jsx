
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
const ConfirmModal = ({ open, onOk, onCancel, title, content }) => {
    return (
        <Modal title={title} open={open} onCancel={onCancel} onOk={onOk}  >
            {content}
        </Modal>
    )
}

export default ConfirmModal