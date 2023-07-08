import {PartialFormValues} from "./valueDependsOnOtherFields.model";

type CalculateFormChange = [PartialFormValues, PartialFormValues]

/*
* If A, B or C is changed, we also need to calculate D.
* Otherwise, the formChange is returned.
* */
export const calculateFormChange = (...[formChange, formValues]: CalculateFormChange) => {
    const currentFieldKey = Object.keys(formChange)[0] as keyof PartialFormValues
    const validationDependenciesForFieldD = ['A', 'B', 'C']  as (keyof PartialFormValues)[]

    if(!validationDependenciesForFieldD.includes(currentFieldKey)) return formChange

    const currentValue = parseInt(formChange[currentFieldKey]?.toString() || '0')

    const aValue = parseInt(formValues?.['A'] || '0')
    const bValue = parseInt(formValues?.['B']  || '0')
    const cValue = formValues?.['C'] || 0

    let dValue = currentValue || 0

    switch (currentFieldKey) {
        case 'A':
            dValue += bValue + cValue
            break
        case 'B':
            dValue += aValue + cValue
            break
        case 'C':
            dValue += aValue + bValue
            break
    }
    return {...formChange, D: dValue.toString()}
}