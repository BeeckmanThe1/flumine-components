import {FieldMapper, InitialValuesFromFields} from "../../../Form.model";
import {formFields} from "../../../fields/FieldComponentMapper";

export type DynamicValidationFormFields = [
    FieldMapper<'A'>[typeof formFields.INPUT],
    FieldMapper<'B'>[typeof formFields.INPUT],
    FieldMapper<'C'>[typeof formFields.CUSTOM],
    FieldMapper<'D'>[typeof formFields.INPUT]
]
export type DynamicValidationFormValues = InitialValuesFromFields<DynamicValidationFormFields>