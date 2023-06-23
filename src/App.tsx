import './App.css'
import {Form, useForm} from './components/index'
import {Typography, message, Card, Button} from 'antd'
import {formFields} from "./components/forms/fields/FieldsMapper";
import type {InitialValuesFromFields} from "./components/forms/Form.model";
import {FieldMapper} from "./components/forms/Form.model";

function App() {

    const fields: [FieldMapper<'C'>[typeof formFields.RADIO]] = [
        {
            name: 'C',
            type: formFields.RADIO,
            componentProps: {
                items: [{key: 'C.1', value: 'C.1 - label'}, {key: 'C.2', value: 'C.2 - label'}],
                onChange: () => console.log('onChange!')
            }
        },
    ]
    const {
        formValues,
        form,
        mergeInChange,
        resetForm,
        clearForm
    } = useForm<InitialValuesFromFields<typeof fields>>({C: 'C.1'})

    return (
        <Card>
            <Typography.Title>Epic form</Typography.Title>

            <Form form={form} mergeInChange={mergeInChange}>
                {fields.map(f => <Form.Field {...f}/>)}
                <div>
                    <Button onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
                    <Button onClick={resetForm}>Reset</Button>
                    <Button onClick={clearForm}>Clear</Button>
                    <div>{JSON.stringify(formValues, null, 4)}</div>
                </div>
            </Form>
        </Card>
    )
}

export default App
