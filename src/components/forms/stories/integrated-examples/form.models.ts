import {FieldMapper} from "../../Form.model";
import {formFields} from "../../fields/FieldsMapper";

export type BasicFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUTB],
    FieldMapper<'C'>[typeof formFields.RADIO],
    FieldMapper<'D'>[typeof formFields.SELECT],
]