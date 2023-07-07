import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space, Alert} from "antd";
import {Form} from "../../form";
import {getDynamicValidationFormFieldValues} from "./basicFormFieldValues";
import {DynamicValidationFormFields} from "./form.models";

const DynamicDields2Template: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm,
        hasErrors
    } = useForm<InitialValuesFromFields<DynamicValidationFormFields>>({})

    const formFields = getDynamicValidationFormFieldValues(formValues)

    const handleFormChange = (values: Partial<InitialValuesFromFields<DynamicValidationFormFields>>) => {
        const currentFieldKey = Object.keys(values)[0] as keyof Partial<InitialValuesFromFields<DynamicValidationFormFields>>
        const validationDependenciesForFieldD = ['A', 'B', 'C']  as (keyof Partial<InitialValuesFromFields<DynamicValidationFormFields>>)[]

        if(!validationDependenciesForFieldD.includes(currentFieldKey)) return onValuesChange(values)

        const currentValue = parseInt(values[currentFieldKey] as string || '0')

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
        onValuesChange({...values, D: dValue.toString()})
    }

    return <>
        <Space>
            <Form form={form} onValuesChange={handleFormChange}>
                {formFields.map(f => <Form.Field {...f}/>)}
                <Space size={'large'} direction={'vertical'}>
                    {hasErrors && <Alert type={'error'} message={'Form has errors'} />}

                    <Space direction={'horizontal'}>
                        <Button htmlType={'submit'} disabled={hasErrors} onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
                        <Button onClick={resetForm}>Reset</Button>
                        <Button onClick={clearForm}>Clear</Button>
                        <Button onClick={() => form.validateFields()}>Trigger form validation</Button>
                    </Space>
                </Space>
            </Form>
        </Space>
        <Card style={{marginTop: '24px'}}>{JSON.stringify(formValues, null, 4)}</Card>
    </>
}
export const DynamicallyField2Form = DynamicDields2Template.bind({});

DynamicallyField2Form.args = {};
DynamicallyField2Form.argTypes = {
    mergeInChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Validation examples',
    component: Form,
} as Meta<typeof Form>;
export default meta