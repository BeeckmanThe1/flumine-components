import {useState} from "react";
import { Form } from 'antd'

export const useForm = <T>(intialValues: T) => {
    const [form] = Form.useForm<T>()
    const [formValues, setFormValues] = useState<T>(intialValues)

    const mergeInChange = (values: Partial<T>) => {
        setFormValues(prev => ({ ...prev, ...values }))
    }

    // problematic: if it's only a small part of the form, the other values won't be reset!
    form.setFieldsValue(formValues as any)

    return {
        form,
        formValues,
        mergeInChange,
        setFormValues
    }
}