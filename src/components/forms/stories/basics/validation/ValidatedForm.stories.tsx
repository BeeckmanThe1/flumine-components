import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {BasicFormValues} from "../basics.model";
import {validatedFormFieldValues} from "../basics.fields";
import {basicFormInitials} from "../basics.initials";

const ValidatedFormTemplate: Story = () => {
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
                {validatedFormFieldValues.map(f => <Form.Field {...f}/>)}
                <Space size={'large'} direction={'vertical'}>
                    <Space direction={'horizontal'}>
                        <Button htmlType={'submit'} onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
                        <Button onClick={resetForm}>Reset</Button>
                        <Button onClick={clearForm}>Clear</Button>
                        <Button onClick={() => form.validateFields()}>Trigger field validation</Button>
                    </Space>
                </Space>
            </Form>
        </Space>
        <Card style={{marginTop: '24px'}}>{JSON.stringify(formValues, null, 4)}</Card>
    </>
}
export const BasicFormWithValidation = ValidatedFormTemplate.bind({});

BasicFormWithValidation.args = {};
BasicFormWithValidation.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Basics',
    component: Form,
} as Meta<typeof Form>;
export default meta