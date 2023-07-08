import {FieldMapper, InitialValuesFromFields} from "../../../Form.model";
import {formFields} from "../../../fields/FieldComponentMapper";

export type ConditionallyRenderingFields = [FieldMapper<'A'>[typeof formFields.INPUT], FieldMapper<'B'>[typeof formFields.INPUT]]
export type ConditionallyRenderingFormFields = InitialValuesFromFields<ConditionallyRenderingFields>
