import {Input, InputProps} from "./input/Input";
import {Radio, RadioProps} from "./radio/Radio";
import {Select, SelectProps} from "./select/Select";
import {CustomField, CustomProps} from "./custom/Custom";
import {Checkbox, CheckboxProps} from "./checkbox/Checkbox";
import {FieldProps, FormFields} from "../Form.model";
import {FC} from 'react'
import {KeyValue} from "../../../utils/typing/KeyValue.type";

// should come Data Model Attribute -> MGXTypes
export const formFields = {
    CHECKBOX: 'CHECKBOX',
    CUSTOM: 'CUSTOM',
    INPUT: 'INPUT',
    RADIO: 'RADIO',
    SELECT: 'SELECT',
} as const

export type FieldResultMapper = {
    [formFields.CHECKBOX]: KeyValue['key'][],
    [formFields.CUSTOM]: number,
    [formFields.INPUT]: string,
    [formFields.RADIO]: KeyValue['key'],
    [formFields.SELECT]: KeyValue['key'] | KeyValue['key'][],   // depends on multiple
}

export type FieldPropTypeMapper = {
    [formFields.CHECKBOX]: CheckboxProps,
    [formFields.CUSTOM]: CustomProps,
    [formFields.INPUT]: InputProps
    [formFields.RADIO]: RadioProps,
    [formFields.SELECT]: SelectProps,
}

export type FieldComponentMapper = {
    [k in FormFields]: FC<FieldPropTypeMapper[k] & FieldProps<FieldResultMapper[k]>>
}
export const fieldComponentMapper: FieldComponentMapper = {
    [formFields.CHECKBOX]: Checkbox,
    [formFields.CUSTOM]: CustomField,
    [formFields.INPUT]: Input,
    [formFields.RADIO]: Radio,
    [formFields.SELECT]: Select,
}
