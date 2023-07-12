import {SelectProps as AntdSelectProps, Select as AntdSelect, Tooltip, Typography} from 'antd'
import {FC} from "react";
import {KeyValue} from "../../../../utils/typing/KeyValue.type";
import {BaseOptionType} from "rc-select/lib/Select";
import {FieldProps} from "../../Form.model";

export type SelectProps = {
    items: (KeyValue & Pick<BaseOptionType, 'disabled'>)[]
} & Pick<AntdSelectProps, 'onFocus' | 'onBlur' | 'allowClear' | 'disabled' | 'mode'>

type SelectType = FC<SelectProps & FieldProps<KeyValue['key'] | KeyValue['key'][]>>

export const Select: SelectType = ({items, value, ...rest}) => {
    return <AntdSelect value={value} {...rest}>
        {items.map(i => <AntdSelect.Option value={i.key}>
                <Tooltip title={i.value}>
                    <Typography.Text ellipsis>{i.value}</Typography.Text>
                </Tooltip>
        </AntdSelect.Option>)}
    </AntdSelect>
}
