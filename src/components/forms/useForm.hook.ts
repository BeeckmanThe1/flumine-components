import {useEffect, useState} from "react";
import {Form} from 'antd'
import {RecursivePartial} from "../../utils/typing/RecursivePartial.type";
import _isEqual from 'lodash/isEqual'
import {useInitialize} from "../../utils/hooks/useInitialize.utils";

export const useForm = <T extends object>(initialValues?: Partial<T>) => {
    const [form] = Form.useForm<T>()
    const [formValues, setFormValues] = useState<Partial<T> | undefined>({})
    const allFields = Object.keys(initialValues || {}) || []
    const clearedValues = allFields.reduce((reduced, current) => ({...reduced, [current]: null}), {})

    useInitialize<typeof initialValues>(initialValues, setFormValues)

    const resetForm = () => {
        setFormValues(initialValues || {})
        form.resetFields()
    }
    const clearForm = () => setFormValues(clearedValues)
    const allErrors = form.getFieldsError()?.flatMap(e => e?.errors)
    const hasErrors = allErrors?.length > 0

    const onValuesChange = (formChange: Partial<T>) => {
        setFormValues(prev => ({...prev || {}, ...formChange || {}}))
    }

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

        console.log('lala³')

        form.setFieldsValue({...clearedValues, ...formValues} as RecursivePartial<T>)
    }, [formValues])

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