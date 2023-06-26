import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";

const {Group, Search} = AntdInput

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
type InputProps = Pick<AntdInputProps, 'onBlur' | 'onChange' | 'onClick' | 'allowClear' | 'placeholder'> & {
    type?: 'password' | 'number'
}

type InputType = FC<InputProps> & {
    Group: typeof Group;
    Search: typeof Search;
};

export const Input: InputType = (props) => {
    return <AntdInput {...props}/>
}

Input.Group = Group
Input.Search = Search
