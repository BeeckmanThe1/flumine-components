import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space, Alert} from "antd";
import {Form} from "../../form";
import {validatedFormFieldValues} from "./basicFormFieldValues";
import {BasicFormFields} from "./form.models";

const ValidatedFormTemplate: Story = () => {
    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm,
        hasErrors
    } = useForm<InitialValuesFromFields<BasicFormFields>>({A: '', B: '', C: 48, D: 'D1', E: 'E1', F: ['F1', 'WHY IS THIS ALLOWED?'], G: ['G1']})

    return <>
        <Space>
            <Form form={form} mergeInChange={mergeInChange}>
                {validatedFormFieldValues.map(f => <Form.Field {...f}/>)}
                <Space size={'large'} direction={'vertical'}>
                    {hasErrors && <Alert type={'error'} message={'Form has errors'} />}

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
export const RequiredFormFields = ValidatedFormTemplate.bind({});

RequiredFormFields.args = {};
RequiredFormFields.argTypes = {
    mergeInChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Validation examples',
    component: Form,
} as Meta<typeof Form>;
export default meta