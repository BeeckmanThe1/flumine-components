import {FieldMapper} from "../../Form.model";
import {formFields} from "../../fields/FieldComponentMapper";

export type BasicFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUT],
    FieldMapper<'C'>[typeof formFields.INPUT],
    FieldMapper<'D'>[typeof formFields.RADIO],
    FieldMapper<'E'>[typeof formFields.SELECT],
    FieldMapper<'F'>[typeof formFields.SELECT],
    FieldMapper<'G'>[typeof formFields.CHECKBOX],
]

export type CustomFormFields = [
    FieldMapper<'A'>[typeof formFields.CUSTOM]
]