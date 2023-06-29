import {fieldComponentMapper} from "./FieldComponentMapper";
import {Form} from "antd";
import {Field as FieldType} from "../Form.model";

export const Field = ({componentProps, name, type, label}: FieldType<string>) => {
    const Component = fieldComponentMapper[type]

    return <Form.Item name={name} label={label}>
        <Component {...componentProps}/>
    </Form.Item>
}