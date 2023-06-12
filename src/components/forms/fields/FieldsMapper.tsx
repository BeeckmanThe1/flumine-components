import {Input} from "./input/Input";
import {InputB} from "./input/InputB";

export const formFields = {
    INPUT: 'INPUT',
    INPUTB: 'INPUTB'
} as const

export const fieldsMapper = {
    [formFields.INPUT]: Input,
    [formFields.INPUTB]: InputB
}
