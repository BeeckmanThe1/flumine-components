import {Input as AntdInput, InputProps as AntdInputProps} from 'antd'
import {FC} from "react";

const {Group, Search, TextArea, Password} = AntdInput

type SharedInputProps = 'type'
/*
We have intentionally limited props we can pass through to maintain a consistent visual aesthetic across all projects.
Before considering the addition of extra customizability or props, please carefully evaluate if they are truly
necessary. The allowable props are:
*
*  - allowClear
*  - onBlur
*  - onChange
*  - onClick
*  - type
* */
type InputProps = Pick<AntdInputProps, SharedInputProps>

type InputType = FC<InputProps> & {
    Group: typeof Group;
    Search: typeof Search;
    TextArea: typeof TextArea;
    Password: typeof Password;
};

export const InputB: InputType = (props) => {
    return <AntdInput {...props}/>
}

InputB.Group = Group
InputB.Search = Search
InputB.TextArea = TextArea
InputB.Password = Password

