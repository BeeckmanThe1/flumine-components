import {fieldComponentMapper, FieldPropTypeMapper, formFields} from "./FieldComponentMapper";
import {Form} from "antd";
import {Field as FieldType} from "../Form.model";
import {ValueOf} from "../../../utils/typing/ValueOf.type";

export function Field<T extends ValueOf<typeof formFields>>({componentProps, name, type, fieldProps}: FieldType<string>) {
    const Component = fieldComponentMapper[type] as React.FC<FieldPropTypeMapper[T]>

    const {label, rules} = fieldProps

    return <Form.Item name={name} label={label} rules={rules}>
        <Component {...componentProps as FieldPropTypeMapper[T]}/>
    </Form.Item>
}