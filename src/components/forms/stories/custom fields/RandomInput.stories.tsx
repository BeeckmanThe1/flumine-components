import {Meta, Story} from "@storybook/react";
import {useForm} from "../../useForm.hook";
import {Button, Card, Space} from "antd";
import {Form} from "../../form";
import {customFormFieldValues} from "./custom.fields";
import {CustomFormValues} from "./custom.model";

const RandomInputTemplate: Story = () => {

    const {
        formValues,
        form,
        onValuesChange,
    } = useForm<CustomFormValues>({A: 12.3456})

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
export const RandomInputExample = RandomInputTemplate.bind({});

RandomInputExample.args = {};
RandomInputExample.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Custom fields',
    component: Form,
} as Meta<typeof Form>;
export default meta