import {FormValues} from "./model";
import {useQuery} from '@tanstack/react-query'

const awaitTimeout = <T>(delay: number, value: T): Promise<T> =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve(value),
            delay
        )
    );

const options = [
    {key: 'Option 1', value: 'Option 1'},
    {key: 'Option 2', value: 'Option 2'},
    {key: 'Option 3', value: 'Option 3'}
]

export const initialValues: FormValues = {
    A: options[0]?.key,
    B: [options[1]?.key],
    C: options[2]?.key,
}

export const useFetchInitials = () => useQuery<FormValues, Error, FormValues>({
    queryKey: ['initials'],
    queryFn: () => awaitTimeout(0, initialValues)
})
export const useFetchOptions = () => useQuery<typeof options, Error, typeof options>({
    queryKey: ['options'],
    queryFn: () => awaitTimeout(1000, options)
})

