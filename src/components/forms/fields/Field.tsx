import {fieldComponentMapper} from "./FieldComponentMapper";
import {Form} from "antd";
import {Field as FieldType} from "../Form.model";

export const Field = ({componentProps, name, type, fieldProps}: FieldType<string>) => {
    const Component = fieldComponentMapper[type] as any
    const {label, rules} = fieldProps

    return <Form.Item name={name} label={label} rules={rules}>
        <Component {...componentProps}/>
    </Form.Item>
}