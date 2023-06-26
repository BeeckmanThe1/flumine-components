import {Button, Popover} from "antd";
import {FC} from "react";

type CustomProps = {
    value?: number,
    onChange?: any
}

type CustomType = FC<CustomProps>


export const CustomField: CustomType = ({value, onChange}) => {

    const handleRandomClick = () => onChange(Math.random() * 100)
    const handleDoublePIClick = () => onChange(2 * Math.PI)
    const explanation = 'This is the BD of Thomas Opdebeeck, he likes rolexes ⌚⌚⌚'

    return <>
        <Popover content={explanation} title="Subtle gift ideas">
            <span style={{cursor: 'pointer'}} onClick={handleRandomClick}>{value?.toFixed(4)}</span>
        </Popover>
        <Button onClick={handleDoublePIClick}>🥧🥧</Button>
    </>
}