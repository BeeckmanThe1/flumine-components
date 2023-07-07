import {Form as AntdForm} from 'antd'
import {Field} from "./fields/Field";
import {FormProps} from "./Form.model";

export function Form<V>({children, onValuesChange, form}:FormProps<V>) {
    return <AntdForm form={form} onValuesChange={onValuesChange} >
        {children}
    </AntdForm>
}

Form.Field = Field