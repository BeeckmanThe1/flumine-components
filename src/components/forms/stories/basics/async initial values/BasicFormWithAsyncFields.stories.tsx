import {Meta, Story} from "@storybook/react";
import {useForm} from "../../../useForm.hook";
import {Button, Card, message, Space} from "antd";
import {Form} from "../../../form";
import {useFetchInitials, useFetchOptions} from "./fields";
import {Fields, FormValues} from "./model";
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'
import {formFields} from "../../../fields/FieldComponentMapper";

const QueryClientProvidedStory = () => {
    const {data: initials} = useFetchInitials()
    const {data: options} = useFetchOptions()

    const {
        formValues,
        form,
        onValuesChange,
        resetForm,
        clearForm
    } = useForm<FormValues>(initials)

    const fields: Fields = [
        {
            name: "A",
            type: formFields.SELECT,
            fieldProps: {
                label: 'A - Label'
            },
            componentProps: {
                items: options || []
            }
        },
        {
            name: "B",
            type: formFields.CHECKBOX,
            fieldProps: {
                label: 'B - Label'
            },
            componentProps: {
                items: options || []
            }
        },
        {
            name: "C",
            type: formFields.RADIO,
            fieldProps: {
                label: 'C - Label'
            },
            componentProps: {
                items: options || []
            }
        }
    ]
    return <>
        <Space>
            <Form form={form} onValuesChange={onValuesChange}>
                {fields?.map(f => <Form.Field {...f}/>)}
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

const BasicFormWithInitialValuesTemplate: Story = () => {
    const bigTime = 100000
    const queryClient = new QueryClient({defaultOptions: {
        queries: {
            staleTime: bigTime, cacheTime: bigTime, refetchOnMount: false, retry: 0, keepPreviousData: true, retryDelay: 0, refetchOnWindowFocus: false
        }}})
    return <QueryClientProvider client={queryClient}>
            <QueryClientProvidedStory/>
    </QueryClientProvider>
}

export const BasicFormWithAsyncInitialValues = BasicFormWithInitialValuesTemplate.bind({});

BasicFormWithAsyncInitialValues.args = {};
BasicFormWithAsyncInitialValues.argTypes = {
    onValuesChange: {table: {disable: true}},
    form: {table: {disable: true}},
};

const meta = {
    title: 'Form/Basics',
    component: Form,
} as Meta<typeof Form>;
export default meta