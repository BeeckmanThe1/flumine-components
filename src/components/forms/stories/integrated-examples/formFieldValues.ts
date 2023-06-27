import {BasicFormFields, CustomFormFields} from "./form.models";
import {formFields} from "../../fields/FieldsMapper";

export const formFieldValues: BasicFormFields = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {

        },
        label: 'A - label'
    },
    {
        name: 'B',
        label: 'B - label',
        type: formFields.INPUT,
        componentProps: {

        }
    },
    {
        name: 'C',
        label: 'C - label',
        type: formFields.INPUT,
        componentProps: {
            type: 'number',
            placeholder: 'number'
        }
    },
    {
        name: 'D',
        label: 'D - label',
        type: formFields.RADIO,
        componentProps: {
            items: [
                {
                    key: 'D1',
                    value: 'D1 - label',
                    disabled: true
                },
                {
                    key: 'D2',
                    value: 'D2 - label'
                },
                {
                    key: 'D3',
                    value: 'D3 - label'
                }
            ]
        }
    },
    {
        name: 'E',
        label: 'E - label',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'E1', value: 'E1 - label', disabled: true}, {key: 'E2', value: 'E2 - label'}],
            disabled: false,
            allowClear: true,
        }
    },
    {
        name: 'F',
        label: 'F - label',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'F1', value: 'F1 - label', disabled: true}, {key: 'F2', value: 'F2 - label'}],
            disabled: false,
            allowClear: true,
            mode: 'multiple'
        }
    },
    {
        name: 'G',
        type: formFields.CHECKBOX,
        componentProps: {
            items: [{key: 'G1', value: 'G1 - label', disabled: true}, {key: 'G2', value: 'G2 - label'}],
        }
    }
]
export const customFormFields: CustomFormFields = [
    {
        name: 'A',
        type: formFields.CUSTOM,
        componentProps: {

        }
    }
]

