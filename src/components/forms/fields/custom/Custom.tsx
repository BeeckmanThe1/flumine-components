import {Button, Popover, Space} from "antd";
import { FC } from "react";
import { FieldProps } from "../../Form.model";
export type CustomProps = object

type CustomFieldType = FC<FieldProps<number>>

const defaultValue = 0

export const CustomField: CustomFieldType = ({value, onChange}) => {
    const handleRandomClick = () => onChange(Math.random() * 100)
    const handleDoublePIClick = () => onChange(2 * Math.PI)
    const explanation = 'This value will randomly change upon click'

    const renderedValue = value || defaultValue

    return <Space direction={'horizontal'}>
        <Popover content={explanation} title="Random number">
            <span style={{cursor: 'pointer'}} onClick={handleRandomClick}>{renderedValue?.toFixed(4)}</span>
        </Popover>
        <Button onClick={handleDoublePIClick}>🥧🥧</Button>
    </Space>
}