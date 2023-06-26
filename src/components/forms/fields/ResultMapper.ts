import {formFields} from "./FieldsMapper";

export type ResultMapper = {
    [formFields.INPUT]: string | number,      // depends on type
    [formFields.RADIO]: string,
    [formFields.SELECT]: string | string[],   // depends on multiple
    [formFields.CUSTOM]: number
}