import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {useForm} from "../../useForm.hook";
import {Button, Card, Space} from "antd";
import {Form} from "../../form";
import {customFormFieldValues} from "./basicFormFieldValues";

const CustomTemplate: Story = () => {

    const {
        formValues,
        form,
        onValuesChange,
    } = useForm<InitialValuesFromFields<typeof customFormFieldValues>>({A: 12.3456})

    return <>
        <Space>
            <Form form={form} onValuesChange={onValuesChange}>
                {customFormFieldValues.map(f => <Form.Field {...f}/>)}
                <div>
                    <Button onClick={() => onValuesChange({['A']: Math.PI})}>🥧</Button>
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
    title: 'Form/Custom field example',
    component: Form,
} as Meta<typeof Form>;
export default meta