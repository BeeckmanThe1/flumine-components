import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../form";
import {formFieldValues} from "./formFieldValues";
import {BasicFormFields} from "./form.models";

const BasicTemplate: Story = () => {
    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm
    } = useForm<InitialValuesFromFields<BasicFormFields>>({A: '', B: '', C: 48, D: 'D1', E: 'E1', F: ['F1', 'WHY IS THIS ALLOWED?'], G: ['G1']})

    return <>
        <Space>
            <Form form={form} mergeInChange={mergeInChange}>
                {formFieldValues.map(f => <Form.Field {...f}/>)}
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
export const BasicForm = BasicTemplate.bind({});

BasicForm.args = {};
BasicForm.argTypes = {
    mergeInChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Integrated examples',
    component: Form,
} as Meta<typeof Form>;
export default meta