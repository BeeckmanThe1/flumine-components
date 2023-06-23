import {Meta, Story} from "@storybook/react";
import {FieldMapper, InitialValuesFromFields} from "../../Form.model";
import {formFields} from "../../fields/FieldsMapper";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../form";

/************************ Form | dynamic fields ************************/

const DynamicFormTemplate: Story = () => {
    type Fields = [FieldMapper<'A'>[typeof formFields.INPUT], FieldMapper<'B'>[typeof formFields.INPUTB]]
    const fields: Fields  = [
        {
            name: 'A',
            type: formFields.INPUT,
            componentProps: {placeholder: 'Type something...'}
        },
        {
            name: 'B',
            type: formFields.INPUTB,
            componentProps: {}
        }
    ]

    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm
    } = useForm<InitialValuesFromFields<typeof fields>>({})

    return <>
        <Space>
            <Form form={form} mergeInChange={mergeInChange}>
                <Form.Field {...fields[0]}/>
                {formValues.A ? <Form.Field {...fields[1]}/> : null}
                <div>
                    <Button onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
                    <Button onClick={resetForm}>Reset</Button>
                    <Button onClick={clearForm}>Clear</Button>
                </div>
            </Form>
        </Space>
        <Card style={{marginTop: '24px'}}>{JSON.stringify(formValues, null, 4)}</Card>
    </>
}
export const DynamicForm = DynamicFormTemplate.bind({});

DynamicForm.args = {};
DynamicForm.argTypes = {
    mergeInChange: { table: { disable: true } },
    form: { table: { disable: true } },
};
const meta = {
    title: 'Form/Integrated examples',
    component: Form,
} as Meta<typeof Form>;
export default meta