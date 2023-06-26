import {BasicFormFields, CustomFormFields} from "./form.models";
import {formFields} from "../../fields/FieldsMapper";

export const basicFormFields: BasicFormFields = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {
            type: 'password',
            placeholder: 'password'
        }
    },
    {
        name: 'B',
        type: formFields.INPUT,
        componentProps: {
            type: 'number',
            placeholder: 'number'
        }
    },
    {
        name: 'C',
        type: formFields.RADIO,
        componentProps: {
            items: [
                {
                    key: 'C1',
                    value: 'C1 - label',
                    disabled: true
                },
                {
                    key: 'C2',
                    value: 'C2 - label'
                },
                {
                    key: 'C3',
                    value: 'C3 - label'
                }
            ]
        }
    },
    {
        name: 'D',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'D1', value: 'D1 - label', disabled: true}, {key: 'D2', value: 'D2 - label'}],
            disabled: false,
            allowClear: true
        }
    },
    {
        name: 'E',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'E1', value: 'E1 - label', disabled: true}, {key: 'E2', value: 'E2 - label'}],
            disabled: false,
            allowClear: true,
            mode: 'multiple'
        }
    }
]
export const customFormFields: CustomFormFields = [
    {
        name: 'A',
        type: formFields.CUSTOM,
        componentProps: {}
    }
]

