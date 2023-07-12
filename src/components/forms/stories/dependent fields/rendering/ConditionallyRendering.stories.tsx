import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {conditionallyRenderingFields} from "./conditionallyRendering.fields";
import {ConditionallyRenderingFormFields} from "./contitionallyRendering.model";

/************************ Form | dynamic fields ************************/

const ConditionallyRenderingTemplate: Story = () => {
    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm
    } = useForm<ConditionallyRenderingFormFields>()

    return <>
        <Space>
            <Form form={form} onValuesChange={onValuesChange}>
                <Form.Field {...conditionallyRenderingFields[0]}/>
                { formValues?.A ? <Form.Field {...conditionallyRenderingFields[1]}/> : null}
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
export const ConditionallyRendering = ConditionallyRenderingTemplate.bind({});

ConditionallyRendering.args = {};
ConditionallyRendering.argTypes = {
    mergeInChange: { table: { disable: true } },
    form: { table: { disable: true } },
};
const meta = {
    title: 'Form/Dependent fields',
    component: Form,
} as Meta<typeof Form>;
export default meta