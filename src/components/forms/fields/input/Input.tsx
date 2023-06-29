import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";
import {FieldProps} from "../../Form.model";

type InputPropsText =  {
    type?: 'text' | 'password'
}
type InputPropsNumber = {
    type?: 'number'
}

export type InputProps = (InputPropsText | InputPropsNumber) & Pick<AntdInputProps, 'onBlur' | 'onChange' | 'onClick' | 'allowClear' | 'placeholder'>

type InputType = FC<InputProps & FieldProps<string | number>>

export const Input: InputType = (props) => {
    return <AntdInput {...props}/>
}
