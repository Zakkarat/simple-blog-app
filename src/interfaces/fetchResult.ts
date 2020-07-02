export interface FetchData {
    title: string,
    body: string,
    id: number
}

export interface Result {
    status?: number,
    error?: null,
    data?: FetchData[]  
}

export type FetchFunction = (url:string) => FetchData[]