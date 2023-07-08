import {ConditionallyRenderingFields} from "./contitionallyRendering.model";
import {formFields} from "../../../fields/FieldComponentMapper";

export const conditionallyRenderingFields: ConditionallyRenderingFields  = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {placeholder: 'Type something...'},
        fieldProps: {}
    },
    {
        name: 'B',
        type: formFields.INPUT,
        componentProps: {},
        fieldProps: {}
    }
]