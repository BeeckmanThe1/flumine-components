import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";

const {Group, Search, TextArea, Password} = AntdInput

/*
We intentionally limited the props we can pass through to maintain a consistent visual aesthetic across all projects.
Before considering extra props, please carefully evaluate if they are truly
necessary. The allowed props are:
*
*  - onBlur
*  - onChange
*  - onClick
*  - type
* */
type InputProps = Pick<AntdInputProps, 'onBlur' | 'onChange' | 'onClick' | 'allowClear' | 'type' | 'placeholder'>

type InputType = FC<InputProps> & {
    Group: typeof Group;
    Search: typeof Search;
    TextArea: typeof TextArea;
    Password: typeof Password;
};

export const Input: InputType = (props) => {
    return <AntdInput {...props}/>
}

Input.Group = Group
Input.Search = Search
Input.TextArea = TextArea
Input.Password = Password