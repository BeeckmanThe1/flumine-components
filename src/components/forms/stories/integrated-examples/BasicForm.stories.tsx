import {Meta, Story} from "@storybook/react";
import {InitialValuesFromFields} from "../../Form.model";
import {formFields} from "../../fields/FieldsMapper";
import {useForm} from "../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../form";
import {BasicFormFields} from "./form.models";

/************************ Basic form ************************/

const BasicTemplate: Story = () => {
    const fields: BasicFormFields  = [
        {
            name: 'A',
            type: formFields.INPUT,
            componentProps: {}
        },
        {
            name: 'B',
            type: formFields.INPUTB,
            componentProps: {}
        },
        {
            name: 'C',
            type: formFields.RADIO,
            componentProps: {
                items: [{key: 'C1' , value: 'C1 - label', disabled: true}, {key: 'C2' , value: 'C2 - label', onChange: () => console.log('changee²')}],
                onChange: () => console.log('changee')
            }
        },
        {
            name: 'D',
            type: formFields.SELECT,
            componentProps: {
                items: [{key: 'D1' , value: 'D1 - label', disabled: true}, {key: 'D2' , value: 'D2 - label'}],
                disabled: false,
                allowClear: true
            }
        }
    ]

    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm
    } = useForm<InitialValuesFromFields<typeof fields>>({C: 'C1', D: 'D1'})

    return <>
        <Space>
            <Form form={form} mergeInChange={mergeInChange}>
                {fields.map(f => <Form.Field {...f}/>)}
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
    mergeInChange: { table: { disable: true } },
    form: { table: { disable: true } },
};

const meta = {
    title: 'Form/Integrated examples',
    component: Form,
} as Meta<typeof Form>;
export default meta