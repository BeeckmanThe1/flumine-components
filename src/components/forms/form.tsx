import {Form as AntdForm} from 'antd'
import {FC} from "react";

export type FormProps = {
    children: any,
    mergeInChange: any,
    form: any,
    initialValues?: any
}
export const Form: any = ({children, mergeInChange, form, initialValues}: any) => {
    return <AntdForm initialValues={initialValues} form={form} onValuesChange={mergeInChange}>
        {children}
    </AntdForm>
}
Form.Item = AntdForm.Item

export const inputTypes = {
    'radio': 'radio'
}
export type ValueOf<T> = T[keyof T]
export type InputTypes = ValueOf<typeof inputTypes>
export type InputItemProps = {
    name: string,
    type: InputTypes,
    props: any
}

export const InputItem: FC<InputItemProps> = () => {
    return <div/>
}
Form.InputItem = InputItem