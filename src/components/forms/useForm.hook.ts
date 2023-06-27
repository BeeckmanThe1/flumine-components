import {useEffect, useState} from "react";
import {Form} from 'antd'
import {RecursivePartial} from "../../utils/typing/RecursivePartial.type";

export const useForm = <T extends object>(initialValues: Partial<T>) => {
    const [form] = Form.useForm<T>()
    const [formValues, setFormValues] = useState<Partial<T>>(initialValues)
    const [clearedValues, setClearedValues] = useState<Partial<T>>({})

    const resetForm = () => setFormValues(initialValues)
    const clearForm = () => setFormValues(clearedValues)

    const mergeInChange = (values: Partial<T>) => {
        console.log('values!', values)
        setFormValues(prev => ({...prev, ...values}))
    }

    form.setFieldsValue({...clearedValues, ...formValues} as RecursivePartial<T>)

    useEffect(() => {
        const allFields = Object.keys(form.getFieldsValue()) || []
        const newClearedValues = allFields.reduce((reduced, current) => ({...reduced, [current]: null}), {})

        setClearedValues(newClearedValues as T)
    }, [])

    return {
        form,
        formValues,
        mergeInChange,
        setFormValues,
        resetForm,
        clearForm
    }
}