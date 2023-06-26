import {Input} from "./input/Input";
import {Radio} from "./radio/Radio";
import {Select} from "./select/Select";
import {CustomField} from "./custom/Custom";

export const formFields = {
    INPUT: 'INPUT',
    RADIO: 'RADIO',
    SELECT: 'SELECT',
    CUSTOM: 'CUSTOM',
} as const

export const fieldsMapper = {
    [formFields.INPUT]: Input,
    [formFields.RADIO]: Radio,
    [formFields.SELECT]: Select,
    [formFields.CUSTOM]: CustomField,
}