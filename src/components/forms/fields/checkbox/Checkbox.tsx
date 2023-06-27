import {
    CheckboxProps as AntdCheckboxProps,
    Checkbox as AntdCheckbox
} from 'antd'
import {FC} from "react";
import {KeyValue} from "../../../../utils/typing/KeyValue.type";

type CheckboxProps = {
    items: (KeyValue & Pick<AntdCheckboxProps, 'disabled' | 'defaultChecked' | 'value'>)[]
}

type CheckboxType = FC<CheckboxProps>

export const Checkbox: CheckboxType = ({items,...rest}) => {
    return <AntdCheckbox.Group {...rest}>
        {items?.map(i => <AntdCheckbox defaultChecked={i?.defaultChecked} key={i?.key} disabled={i?.disabled} value={i?.key}>{i?.value}</AntdCheckbox>)}
    </AntdCheckbox.Group>
}
