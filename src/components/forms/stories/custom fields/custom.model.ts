import {FieldMapper, InitialValuesFromFields} from "../../Form.model";
import {formFields} from "../../fields/FieldComponentMapper";
import {customFormFieldValues} from "./custom.fields";

export type CustomFormFields = [
    FieldMapper<'A'>[typeof formFields.CUSTOM]
]
export type CustomFormValues = InitialValuesFromFields<typeof customFormFieldValues>