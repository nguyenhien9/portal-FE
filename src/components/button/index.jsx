
import { Button } from 'antd'

const CustomButton = ({ type, text, ...others }) => {
    return (
        <Button type={type} {...others}>{text}</Button>
    )
}

export default CustomButton