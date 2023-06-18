import {Form} from './form';
import {Meta, Story} from '@storybook/react';
import {useForm} from "./useForm.hook";
import {FieldMapper, InitialValuesFromFields} from "./Form.model";
import {Button, Card, message, Space} from "antd";
import {formFields} from "./fields/FieldsMapper";

const meta = {
    title: 'Forms/Form',
    component: Form,
} as Meta<typeof Form>;

type FieldsType = [FieldMapper<'A'>[typeof formFields.INPUT], FieldMapper<'B'>[typeof formFields.INPUTB]]
type DemoProps = { fields: FieldsType}

const Template: Story<DemoProps> = ({fields}) => {
    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm
    } = useForm<InitialValuesFromFields<typeof fields>>({A: 'lel'})

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
export const BasicForm = Template.bind({});

const fields: [FieldMapper<'A'>[typeof formFields.INPUT], FieldMapper<'B'>[typeof formFields.INPUTB]] = [
    {
        name: 'A',
        type: formFields.INPUT,
        componentProps: {}
    },
    {
        name: 'B',
        type: formFields.INPUTB,
        componentProps: {}
    }
]

BasicForm.args = {
    fields
};
BasicForm.argTypes = {
    fields,
    mergeInChange: { table: { disable: true } },
    form: { table: { disable: true } }

};
export default meta