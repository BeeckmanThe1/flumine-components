import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";

type InputPropsText =  {
    type?: 'text' | 'password'
}
type InputPropsNumber = {
    type?: 'number'
}

export type InputProps = (InputPropsText | InputPropsNumber) & Pick<AntdInputProps, 'onBlur' | 'onChange' | 'onClick' | 'allowClear' | 'placeholder'>

type InputType = FC<InputProps>

export const Input: InputType = (props) => {
    return <AntdInput {...props}/>
}
