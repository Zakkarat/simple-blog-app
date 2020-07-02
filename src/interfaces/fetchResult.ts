export interface FetchData {
    title: string,
    body: string,
    id: number,
    comments?: string[]
}
export interface Result {
    status?: number,
    error?: null,
    data?: FetchData[] | FetchData
}

export type FetchFunction = (url:string) => any