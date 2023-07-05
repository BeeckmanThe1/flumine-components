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

export type ValidatedFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUT],
    FieldMapper<'C'>[typeof formFields.INPUT],
    FieldMapper<'D'>[typeof formFields.RADIO],
    FieldMapper<'E'>[typeof formFields.SELECT],
    FieldMapper<'F'>[typeof formFields.SELECT],
    FieldMapper<'G'>[typeof formFields.CHECKBOX],
    FieldMapper<'H'>[typeof formFields.CUSTOM],
]

export type DynamicValidationFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUT],
    FieldMapper<'C'>[typeof formFields.CUSTOM],
    FieldMapper<'D'>[typeof formFields.INPUT]
]

export type CustomFormFields = [
    FieldMapper<'A'>[typeof formFields.CUSTOM]
]