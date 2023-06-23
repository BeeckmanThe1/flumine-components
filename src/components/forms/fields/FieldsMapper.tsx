import {Input} from "./input/Input";
import {InputB} from "./input/InputB";
import {Radio} from "./radio/Radio";

export const formFields = {
    INPUT: 'INPUT',
    INPUTB: 'INPUTB',
    RADIO: 'RADIO'
} as const

export const fieldsMapper = {
    [formFields.INPUT]: Input,
    [formFields.INPUTB]: InputB,
    [formFields.RADIO]: Radio,
}