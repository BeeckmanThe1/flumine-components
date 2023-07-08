import {
    CheckboxProps as AntdCheckboxProps,
    Checkbox as AntdCheckbox,
} from 'antd'
import {FC} from "react";
import {KeyValue} from "../../../../utils/typing/KeyValue.type";
import {FieldProps} from "../../Form.model";
import {CheckboxValueType} from "antd/es/checkbox/Group";

export type CheckboxProps = {
    items: (KeyValue & Pick<AntdCheckboxProps, 'disabled' | 'defaultChecked' | 'value'>)[]
}

type CheckboxType = FC<CheckboxProps & FieldProps<KeyValue['key'][]>>

export const Checkbox: CheckboxType = ({items, value, onChange}) => {
    return <AntdCheckbox.Group value={value} onChange={onChange as (checkedValue: CheckboxValueType[]) => void}>
        {items?.map(i => <AntdCheckbox defaultChecked={i?.defaultChecked} key={i?.key} disabled={i?.disabled} value={i?.key}>{i?.value}</AntdCheckbox>)}
    </AntdCheckbox.Group>
}
