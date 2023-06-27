export type ReactComponentProps<T extends (props: any) => any> = Parameters<T>['0']
