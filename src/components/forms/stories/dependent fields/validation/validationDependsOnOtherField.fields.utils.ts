import {InitialValuesFromFields} from "../../../Form.model";
import {formFields} from "../../../fields/FieldComponentMapper";
import {RuleObject} from "rc-field-form/lib/interface";
import {DynamicValidationFormFields} from "./validationDependsOnOtherField.models";

export const getDynamicValidationFormFieldValues = (formValues: Partial<InitialValuesFromFields<DynamicValidationFormFields>>): DynamicValidationFormFields => [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {
            type: 'number'
        },
        fieldProps: {
            label: 'A - label',
            rules: [
                {
                    required: true,
                    message: 'Please input something - A'
                },
                {
                    validator: ((_rule: RuleObject, value: number) => value >= 10 ? Promise.resolve() : Promise.reject()),
                    message: 'Please input >= 10'
                },
                {
                    validator: (_rule: RuleObject, value: number) => value <= 50 ? Promise.resolve() : Promise.reject(),
                    message: 'Please input <= 50'
                }
            ]
        },
    },
    {
        name: 'B',
        type: formFields.INPUT,
        componentProps: {type: 'number'},
        fieldProps: {
            label: 'B - label',
            rules: [
                {
                    required: true,
                    message: 'Please input something - B'
                },
                {
                    validator: (_rule: RuleObject, value: number) => value >= 10 ? Promise.resolve() : Promise.reject(),
                    message: 'Please input >= 10'
                },
                {
                    validator: (_rule: RuleObject, value: number) => value <= 50 ? Promise.resolve() : Promise.reject(),
                    message: 'Please input <= 50'
                }
            ]
        },

    },
    {
        name: 'C',
        type: formFields.CUSTOM,
        componentProps: {type: 'number'},
        fieldProps: {
            label: 'C - label',
            rules: [
                {
                    required: true,
                    message: 'Please input something - C'
                },
                {
                    validator: (_rule: RuleObject, value: number) => value >= 10 ? Promise.resolve('') : Promise.reject(''),
                    message: 'Please input >= 10'
                },
                {
                    validator: (_rule: RuleObject, value: number) => value <= 50 ? Promise.resolve() : Promise.reject(),
                    message: 'Please input <= 50'
                }
            ]
        },
    },
    {
        name: 'D',
        type: formFields.INPUT,
        componentProps: {
            type: 'number',
            placeholder: 'number'
        },
        fieldProps: {
            label: 'D - label',
            rules: [
                {
                    required: true,
                    message: 'Please input something - D'
                },
                {
                    validator: (_rule: RuleObject, value: string) => {
                        const aValue = parseInt(formValues?.['A'] as string, 10)
                        const bValue = parseInt(formValues?.['B'] as string, 10)
                        const cValue = (formValues?.['C'] || 0) as number
                        const dValue = parseInt(value, 10)

                        return aValue + bValue + cValue === dValue ? Promise.resolve() : Promise.reject()
                    },
                    message: 'Please input a value for D so that A + B + C = D'
                }
            ]
        },
    },
]