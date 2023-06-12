import {fieldsMapper} from "./FieldsMapper";
import {Form} from "../form";
import {Field as FieldType} from "../Form.model";

export const Field = ({componentProps, name, type}: FieldType<string>) => {
    const Component = fieldsMapper[type]

    return <Form.Item name={name}>
        <Component {...componentProps}/>
    </Form.Item>
}