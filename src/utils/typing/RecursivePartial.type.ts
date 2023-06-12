// copy pasted this type from antd because they don't export
export type RecursivePartial<T> = T extends object ? {
    [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : T[P] extends object ? RecursivePartial<T[P]> : T[P];
} : any;