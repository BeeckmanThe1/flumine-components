import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space, Alert} from "antd";
import {Form} from "../../form";
import {getDynamicValidationFormFieldValues} from "./basicFormFieldValues";
import {DynamicValidationFormFields} from "./form.models";

const DynamicValidatedFormTemplate: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm,
        hasErrors,
    } = useForm<InitialValuesFromFields<DynamicValidationFormFields>>({})

    const formFields = getDynamicValidationFormFieldValues(formValues)

    const handleFormChange = (values: Partial<InitialValuesFromFields<DynamicValidationFormFields>>) => {

        const currentField = Object.keys(values)[0]
        const validationDependenciesForFieldD = ['A', 'B', 'C']

        onValuesChange(values)
        if(validationDependenciesForFieldD.includes(currentField)) form.validateFields(['D']).then()
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
export const DynamicallyValidatedForm = DynamicValidatedFormTemplate.bind({});

DynamicallyValidatedForm.args = {};
DynamicallyValidatedForm.argTypes = {
    mergeInChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Validation examples',
    component: Form,
} as Meta<typeof Form>;
export default meta