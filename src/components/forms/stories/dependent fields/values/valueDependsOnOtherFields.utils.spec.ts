import {calculateFormChange} from "./valueDependsOnOtherFields.utils";

describe('calculateFormChange', () => {
    test('Happy flow', () => {
        const oldValueA = '1'
        const newValueA = '10'
        const valueB = '2'
        const valueC = 3
        const oldValueD = '6'

        const formChange = {
            A: newValueA
        }
        const formValues = {
            A: oldValueA,
            B: valueB,
            C: valueC,

            D: oldValueD,
        }

        const result = calculateFormChange(formChange, formValues)
        expect(result).toEqual({
            A: newValueA,
            B: valueB,
            C: valueC,
            D: '15',
        })
    })
})