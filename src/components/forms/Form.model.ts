import {ReactNode} from "react";
import {FormInstance} from "antd";
import {fieldsMapper, formFields} from "./fields/FieldsMapper";
import {ReactComponentProps} from "../../utils/typing/ReactComponentProps.type";
import {ValueOf} from "../../utils/typing/ValueOf.type";
import {ResultMapper} from "./fields/ResultMapper";

export type FieldName = string
export type FormProps<V> = {
    mergeInChange: (input: Partial<V>) => void,
    form: FormInstance<V>,
    children: ReactNode
}
export type PropsFromFieldType<T extends FormFields> = ReactComponentProps<FieldsMapper[T]>
export type FormFields = ValueOf<typeof formFields>
export type FieldsMapper = typeof fieldsMapper
export type InitialValuesFromFields<T extends Field<FieldName>[]> = { [k in T[number] as k['name']]: ResultMapper[k['type']] }
export type FieldMapper<N extends FieldName> = {
    [f in FormFields]: {
        name: N,
        type: f,
        componentProps: PropsFromFieldType<f>
    }
}

export type Field<N extends FieldName> = FieldMapper<N>[FormFields]
