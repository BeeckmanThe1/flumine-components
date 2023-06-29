import {Radio as AntdRadio, RadioProps as AntdRadioProps} from 'antd'
import {FC} from "react";
import {KeyValue} from "../../../../utils/typing/KeyValue.type";
import {RadioGroupProps} from "antd/es/radio/interface";
import {FieldProps} from "../../Form.model";

export type RadioProps = {
    items: (KeyValue & Pick<AntdRadioProps, 'disabled' | 'onChange'>)[]
} & Pick<RadioGroupProps, 'onFocus' | 'onBlur' | 'onChange' | 'disabled'>

type RadioType = FC<RadioProps & FieldProps<KeyValue['key']>>

export const Radio: RadioType = ({items, ...rest}) => {
    return <AntdRadio.Group {...rest}>
        {items?.map(i => <AntdRadio disabled={i?.disabled} onChange={i?.onChange} key={i?.key} value={i?.key}>{i?.value}</AntdRadio>)}
    </AntdRadio.Group>
}