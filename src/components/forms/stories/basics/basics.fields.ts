import {formFields} from "../../fields/FieldComponentMapper";
import {BasicFormFields, BasicFormWithValidationFields} from "./basics.model";

export const basicFormFieldValues: BasicFormFields = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {},
        fieldProps: {
            label: 'A - label'
        },
    },
    {
        name: 'B',
        type: formFields.INPUT,
        componentProps: {},
        fieldProps: {
            label: 'B - label',
        },

    },
    {
        name: 'C',
        type: formFields.INPUT,
        componentProps: {
            type: 'number',
            placeholder: 'number'
        },
        fieldProps: {
            label: 'C - label',
        },
    },
    {
        name: 'D',
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
        },
        fieldProps: {
            label: 'D - label'
        },
    },
    {
        name: 'E',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'E1', value: 'E1 - label', disabled: true}, {key: 'E2', value: 'E2 - label'}],
            disabled: false,
            allowClear: true,
        },
        fieldProps: {
            label: 'E - label',
        }
    },
    {
        name: 'F',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'F1', value: 'F1 - label', disabled: true}, {key: 'F2', value: 'F2 - label'}],
            disabled: false,
            allowClear: true,
            mode: 'multiple'
        },
        fieldProps: {
            label: 'F - label',
        }
    },
    {
        name: 'G',
        type: formFields.CHECKBOX,
        componentProps: {
            items: [{key: 'G1', value: 'G1 - label', disabled: true}, {key: 'G2', value: 'G2 - label'}],
        },
        fieldProps: {
            label: 'G - Label'
        }
    }
]
export const validatedFormFieldValues: BasicFormWithValidationFields = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {},
        fieldProps: {
            label: 'A - label',
            rules: [{required: true, message: 'Please input something - A'}]
        },
    },
    {
        name: 'B',
        type: formFields.INPUT,
        componentProps: {},
        fieldProps: {
            label: 'B - label',
            rules: [{required: true, message: 'Please input something - B'}]
        },

    },
    {
        name: 'C',
        type: formFields.INPUT,
        componentProps: {
            type: 'number',
            placeholder: 'number'
        },
        fieldProps: {
            label: 'C - label',
            rules: [{required: true, message: 'Please input something - C'}]
        },
    },
    {
        name: 'D',
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
        },
        fieldProps: {
            label: 'D - label',
            rules: [{required: true, message: 'Please input something - D'}]
        },
    },
    {
        name: 'E',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'E1', value: 'E1 - label', disabled: true}, {key: 'E2', value: 'E2 - label'}],
            disabled: false,
            allowClear: true,
        },
        fieldProps: {
            label: 'E - label',
            rules: [{required: true, message: 'Please input something - E'}]
        }
    },
    {
        name: 'F',
        type: formFields.SELECT,
        componentProps: {
            items: [{key: 'F1', value: 'F1 - label', disabled: true}, {key: 'F2', value: 'F2 - label'}],
            disabled: false,
            allowClear: true,
            mode: 'multiple'
        },
        fieldProps: {
            label: 'F - label',
            rules: [{required: true, message: 'Please input something - F'}]
        }
    },
    {
        name: 'G',
        type: formFields.CHECKBOX,
        componentProps: {
            items: [{key: 'G1', value: 'G1 - label', disabled: true}, {key: 'G2', value: 'G2 - label'}],
        },
        fieldProps: {
            label: 'G - Label',
            rules: [{required: true, message: 'Please input something - G'}]
        }
    },
    {
        name: 'H',
        type: formFields.CUSTOM,
        componentProps: {},
        fieldProps: {
            label: 'H - Label',
            rules: [{required: true, message: 'Please input something - H'}]
        }
    },
]
