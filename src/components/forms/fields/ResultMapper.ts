import {formFields} from "./FieldsMapper";
import {InputProps} from "./input/Input";

export type ResultMapper  = {
    [formFields.INPUT]: InputProps['value'],      // depends on type
    [formFields.RADIO]: string,
    [formFields.SELECT]: string | string[],   // depends on multiple
    [formFields.CUSTOM]: number,
    [formFields.CHECKBOX]: string[],
}