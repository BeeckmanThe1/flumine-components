import {Button, Popover} from "antd";
import { FC } from "react";
import { FieldProps } from "../../Form.model";
export type CustomProps = object

type CustomFieldType = FC<FieldProps<number>>

export const CustomField: CustomFieldType = ({value, onChange}) => {
    const handleRandomClick = () => onChange(Math.random() * 100)
    const handleDoublePIClick = () => onChange(2 * Math.PI)
    const explanation = 'This is the BD of Thomas Opdebeeck, he likes rolexes ⌚⌚⌚'

    return <>
        <Popover content={explanation} title="Subtle gift ideas">
            <span style={{cursor: 'pointer'}} onClick={handleRandomClick}>{'value?.toFixed(4)'}</span>
        </Popover>
        <Button onClick={handleDoublePIClick}>🥧🥧</Button>
    </>
}