import {Form as AntdForm} from 'antd'
import {Field} from "./fields/Field";
import {FormProps} from "./Form.model";

export function Form<V>({children, mergeInChange, form}:FormProps<V>) {
    return <AntdForm form={form} onValuesChange={mergeInChange} >
        {children}
    </AntdForm>
}

Form.Field = Field
// Form.Item = AntdForm.Item
