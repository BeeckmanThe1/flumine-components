import {Radio as AntdRadio} from 'antd'
import {FC} from "react";
import {KeyValue} from "../../../../utils/typing/KeyValue.type";
import {RadioGroupProps} from "antd/es/radio/interface";

type RadioProps = {
    items: KeyValue[]
} & Pick<RadioGroupProps, 'defaultValue' | 'onFocus' | 'onChange' | 'onBlur'>

type RadioType = FC<RadioProps>

export const Radio: RadioType = ({items, defaultValue, ...rest}) => {
    return <AntdRadio.Group defaultValue={defaultValue} {...rest}>
        {items?.map(i => <AntdRadio key={i?.key} value={i?.key}>{i?.value}</AntdRadio>)}
    </AntdRadio.Group>
}
