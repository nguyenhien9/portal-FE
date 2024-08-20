import React from 'react'
import { Button } from 'antd'

const CustomButton = ({ type, text, ...rest }) => {
    return (
        <Button type={type} {...rest} >{text}</Button>
    )
}

export default CustomButton