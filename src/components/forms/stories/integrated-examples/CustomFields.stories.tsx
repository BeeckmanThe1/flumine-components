import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {formFields} from "../../fields/FieldsMapper";
import {useForm} from "../../useForm.hook";
import {Button, Card, Space} from "antd";
import {Form} from "../../form";
import {CustomFormFields} from "./form.models";

const CustomTemplate: Story = () => {
    const fields: CustomFormFields = [
        {
            name: 'A',
            type: formFields.CUSTOM,
            componentProps: {}
        }
    ]

    const {
        formValues,
        form,
        mergeInChange,
    } = useForm<InitialValuesFromFields<typeof fields>>({A: 10.0795})

    return <>
        <Space>
            <Form form={form} mergeInChange={mergeInChange}>
                {fields.map(f => <Form.Field {...f}/>)}
                <div>
                    <Button onClick={() => mergeInChange({['A']: Math.PI})}>🥧</Button>
                </div>
            </Form>
        </Space>
        <Card style={{marginTop: '24px'}}>{JSON.stringify(formValues, null, 4)}</Card>
    </>
}
export const CustomForm = CustomTemplate.bind({});

CustomForm.args = {};
CustomForm.argTypes = {
    mergeInChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Custom field examples',
    component: Form,
} as Meta<typeof Form>;
export default meta