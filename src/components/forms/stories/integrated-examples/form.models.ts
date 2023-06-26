import {FieldMapper} from "../../Form.model";
import {formFields} from "../../fields/FieldsMapper";

export type BasicFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUT],
    FieldMapper<'C'>[typeof formFields.RADIO],
    FieldMapper<'D'>[typeof formFields.SELECT],
    FieldMapper<'E'>[typeof formFields.SELECT],
]

export type CustomFormFields = [
    FieldMapper<'A'>[typeof formFields.CUSTOM]
]