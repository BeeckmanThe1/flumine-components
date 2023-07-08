import {useEffect, useState} from "react";
import {Form} from 'antd'
import {RecursivePartial} from "../../utils/typing/RecursivePartial.type";
import _isEqual from 'lodash/isEqual'

export const useForm = <T extends object>(initialValues: Partial<T>) => {
    const [form] = Form.useForm<T>()
    const [formValues, setFormValues] = useState<Partial<T>>({})
    const [clearedValues, setClearedValues] = useState<Partial<T>>({})

    const resetForm = () => {
        setFormValues(initialValues)
        form.resetFields()
    }
    const clearForm = () => setFormValues(clearedValues)
    const allErrors = form.getFieldsError()?.flatMap(e => e?.errors)
    const hasErrors = allErrors?.length > 0

    const onValuesChange = (formChange: Partial<T>) => {
        setFormValues(prev => ({...prev || {}, ...formChange || {}}))
    }

    useEffect(() => {
        if(initialValues === undefined) return

        setFormValues(initialValues)
    },[initialValues])
    useEffect(() => {
        const allFields = Object.keys(form.getFieldsValue()) || []
        const newClearedValues = allFields.reduce((reduced, current) => ({...reduced, [current]: null}), {})

        setClearedValues(newClearedValues as T)
    }, [form])

    /*
    * This is an example of how the useEffect hook is typically used: to synchronize our own state with third-party
    * systems.Initially, you might assume that we could directly use the form state provided by the third-party library.
    * However, the library does not export the form as a React state. Instead, Antd (Ant Design) offers a
    * method called form.getFieldsValue that we need to actively call whenever we need to access the form values. As a
    * result, in order to dynamically set certain field values without user interaction, we require the following side
    * effect.
    * */

    useEffect(() => {
        const stateIsAlreadySynced = _isEqual(form.getFieldsValue(), formValues)

        if (stateIsAlreadySynced) return

        form.setFieldsValue({...clearedValues, ...formValues} as RecursivePartial<T>)
    }, [formValues, clearedValues, form])

    return {
        form,
        onValuesChange,
        formValues,
        setFormValues,
        resetForm,
        clearForm,
        hasErrors
    }
}