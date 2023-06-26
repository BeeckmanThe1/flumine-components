
export type ReactComponentProps<T extends (props: any) => any> = Parameters<T>['0']
// export type ReactComponentProps<T extends FC<any>> = T extends FC<infer Props> ? Props : never
