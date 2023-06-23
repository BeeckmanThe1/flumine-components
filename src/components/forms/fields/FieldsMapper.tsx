import {Input} from "./input/Input";
import {InputB} from "./input/InputB";
import {Radio} from "./radio/Radio";
import {Select} from "./select/Select";

export const formFields = {
    INPUT: 'INPUT',
    INPUTB: 'INPUTB',
    RADIO: 'RADIO',
    SELECT: 'SELECT',
} as const

export const fieldsMapper = {
    [formFields.INPUT]: Input,
    [formFields.INPUTB]: InputB,
    [formFields.RADIO]: Radio,
    [formFields.SELECT]: Select,
}