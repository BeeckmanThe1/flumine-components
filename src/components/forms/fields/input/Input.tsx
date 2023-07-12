import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";
import {FieldProps} from "../../Form.model";

export type InputProps = {
    type?: 'text' | 'password' | 'number'
} & Pick<AntdInputProps, 'onBlur' | 'onChange' | 'onClick' | 'allowClear' | 'placeholder'>

type InputType = FC<InputProps & FieldProps<string>>

export const Input: InputType = (rest) => {
    return <AntdInput {...rest}/>
}
