import {useEffect, useState} from "react";
import { Form } from 'antd'

export const useForm = <T>(initialValues: T) => {
    const [form] = Form.useForm<T>()
    const [formValues, setFormValues] = useState<T>(initialValues)
    const [clearedValues, setClearedValues] = useState(null)

    const resetForm = () => setFormValues(initialValues)
    const clearForm = () => setFormValues(clearedValues)

    const mergeInChange = (values: Partial<T>) => {
        setFormValues(prev => ({ ...prev, ...values }))
    }

    form.setFieldsValue({...clearedValues, ...formValues})

    useEffect(() => {
        const allFields = Object.keys(form.getFieldsValue()) || []
        const clearedValues = allFields.reduce((reduced, current) => ({...reduced, [current]: null}), {})

        setClearedValues(clearedValues as T)
    },[])

    return {
        form,
        formValues,
        mergeInChange,
        setFormValues,
        resetForm,
        clearForm
    }
}