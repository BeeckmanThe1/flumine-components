import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {getDynamicValidationFormFieldValues} from "./validationDependsOnOtherField.fields.utils";
import {DynamicValidationFormValues} from "./validationDependsOnOtherField.models";

const ValidationDependsOnOtherFieldsTemplate: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm
    } = useForm<DynamicValidationFormValues>()

    const formFields = getDynamicValidationFormFieldValues(formValues)

    const handleFormChange = (formChange: Partial<DynamicValidationFormValues>) => {
        const currentField = Object.keys(formChange)[0]
        const validationDependenciesForFieldD = ['A', 'B', 'C']

        onValuesChange(formChange)
        if(validationDependenciesForFieldD.includes(currentField)) form.validateFields(['D']).then()
    }

    return <>
        <Space>
            <Form form={form} onValuesChange={handleFormChange}>
                {formFields.map(f => <Form.Field {...f}/>)}
                <Space size={'large'} direction={'vertical'}>
                    <Space direction={'horizontal'}>
                        <Button htmlType={'submit'} onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
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
export const ValidationDependsOnOtherFields = ValidationDependsOnOtherFieldsTemplate.bind({});

ValidationDependsOnOtherFields.args = {};
ValidationDependsOnOtherFields.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Dependent fields',
    component: Form,
} as Meta<typeof Form>;
export default meta