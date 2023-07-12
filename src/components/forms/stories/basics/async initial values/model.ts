import {FieldMapper, InitialValuesFromFields} from "../../../Form.model";
import {formFields} from "../../../fields/FieldComponentMapper";

export type Fields = [
    FieldMapper<'A'>[typeof formFields.SELECT],
    FieldMapper<'B'>[typeof formFields.CHECKBOX],
    FieldMapper<'C'>[typeof formFields.RADIO],
]

export type FormValues = InitialValuesFromFields<Fields>