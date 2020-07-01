import {AxResponse} from './Response'

export interface Result {
    status?: number,
    error?: null,
    data?: Object  
}

export type FetchFunction = (url:string) => AxResponse