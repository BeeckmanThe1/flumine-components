import {ReactNode} from "react";
import {FormInstance, FormItemProps as AntdFormItemProps} from "antd";
import {FieldPropTypeMapper, formFields} from "./fields/FieldComponentMapper";
import {ValueOf} from "../../utils/typing/ValueOf.type";
import {FieldResultMapper} from "./fields/FieldComponentMapper";

export type FieldName = string
export type FormProps<V> = {
    onValuesChange: (input: Partial<V>) => void,
    form: FormInstance<V>,
    children: ReactNode
}
export type FormFields = ValueOf<typeof formFields>
export type InitialValuesFromFields<T extends Field<FieldName>[]> = { [k in T[number] as k['name']]: FieldResultMapper[k['type']] }
export type FieldMapper<N extends FieldName> = {
    [T in FormFields]: {
        name: N,
        type: T,
        componentProps: FieldPropTypeMapper[T]
        fieldProps: Pick<AntdFormItemProps, 'label' | 'rules'>
    }
}

export type Field<N extends FieldName> = FieldMapper<N>[FormFields]

export type FieldProps<T> = {
    value: T
    onChange: (x: T) => void
}


