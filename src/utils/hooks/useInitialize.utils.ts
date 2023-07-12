import {useRef} from "react";

export const useInitialize = <T>(initialValues: T, initializer: (x: T) => void) => {
    const isInitialized = useRef(false)
    if (!isInitialized.current && initialValues) {
        initializer(initialValues)
        isInitialized.current = true
    }
}