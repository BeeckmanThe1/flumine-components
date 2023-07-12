import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {calculateFormChange} from "./valueDependsOnOtherFields.utils";
import {valueDependsOnOtherFieldFields} from "./valueDependsOnOtherFields.fields";
import {ValueDependsOnOtherFieldFieldsFormValues} from "./valueDependsOnOtherFields.model";

const ValueDependsOnOtherFieldsTemplate: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm
    } = useForm<ValueDependsOnOtherFieldFieldsFormValues>()

    const handleFormChange = (formChange: Partial<ValueDependsOnOtherFieldFieldsFormValues>) => {
        const calculatedFormChange = calculateFormChange(formChange, formValues || {})
        onValuesChange(calculatedFormChange)
    }

    return <>
        <Space>
            <Form form={form} onValuesChange={handleFormChange}>
                {valueDependsOnOtherFieldFields.map(f => <Form.Field {...f}/>)}
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
export const ValueDependsOnOtherFields = ValueDependsOnOtherFieldsTemplate.bind({});

ValueDependsOnOtherFields.args = {};
ValueDependsOnOtherFields.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Dependent fields',
    component: Form,
} as Meta<typeof Form>;
export default meta