import { FetchData } from "./fetchResult";

export type actionResult = {
    type: string,
    payload: FetchData[] | FetchData
}

export type actionFunc = (posts?: FetchData[], post?: FetchData) => actionResult | void