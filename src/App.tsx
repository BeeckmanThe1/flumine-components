import './App.css'

import {Form, useForm} from './components/index'
import {Input, Radio, Select, Tooltip, Typography, message, Card, Button } from 'antd'

function App() {
    const {formValues, form, mergeInChange, resetForm, clearForm} = useForm({a: 'lal'})

    return (
        <Card>
            <Typography.Title>Epic form</Typography.Title>
            <Form form={form} mergeInChange={mergeInChange}>
                <Form.Item name={'a'}>
                    <Input/>
                </Form.Item>
                <Form.Item name={'b'}>
                    <Radio.Group>
                        <Radio value={'A'}>A - label</Radio>
                        <Radio value={'B'}>B - label</Radio>
                        <Radio value={'C'}>C - label</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={'c'}>
                    <Select allowClear>
                        <Select.Option value={'A'}>
                            <Tooltip title={'A - label'} placement="top">
                                <Typography.Text ellipsis>A - label</Typography.Text>
                            </Tooltip>
                        </Select.Option>
                        <Select.Option value={'B'}>
                            <Tooltip title={'B - label'} placement="top">
                                <Typography.Text ellipsis>B - label</Typography.Text>
                            </Tooltip>
                        </Select.Option>
                        <Select.Option value={'C'}>
                            <Tooltip title={'C - label'} placement="top">
                                <Typography.Text ellipsis>C - label</Typography.Text>
                            </Tooltip>
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Form>

            <div>{JSON.stringify(formValues, null, 4)}</div>

            <Button onClick={() => message.success(JSON.stringify(formValues, null, 4))}>Submit</Button>
            <Button onClick={resetForm}>Reset</Button>
            <Button onClick={clearForm}>Clear</Button>

        </Card>
    )
}

export default App
