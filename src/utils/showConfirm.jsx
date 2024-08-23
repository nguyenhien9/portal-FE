import { Modal } from "antd";

/**
 * Hàm hiển thị modal xác nhận.
 * @param {Object} options - Các tùy chọn cho modal.
 * @param {string} options.title - Tiêu đề của modal.
 * @param {React.ReactNode} options.content - Nội dung của modal.
 * @param {Function} options.onConfirm - Hàm gọi khi người dùng xác nhận.
 * @param {Function} options.onCancel - Hàm gọi khi người dùng hủy bỏ.
 */
export const showConfirm = ({ title, content, icon, onConfirm, onCancel }) => {
    Modal.confirm({
        title,
        content,
        icon,
        onOk: onConfirm,
        okType: 'danger',
        onCancel: onCancel
    })
}
