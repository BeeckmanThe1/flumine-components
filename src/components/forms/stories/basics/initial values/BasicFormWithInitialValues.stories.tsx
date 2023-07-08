import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {basicFormFieldValues} from "../basics.fields";
import {BasicFormValues} from "../basics.model";
import {basicFormInitials} from "../basics.initials";

const BasicFormWithInitialValuesTemplate: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm
    } = useForm<BasicFormValues>(basicFormInitials)

    return <>
        <Space>
            <Form form={form} onValuesChange={onValuesChange}>
                {basicFormFieldValues.map(f => <Form.Field {...f}/>)}
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

export const BasicFormWithInitialValues = BasicFormWithInitialValuesTemplate.bind({});

BasicFormWithInitialValues.args = {};
BasicFormWithInitialValues.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Basics',
    component: Form,
} as Meta<typeof Form>;
export default meta