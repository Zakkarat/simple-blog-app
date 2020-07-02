import { useEffect, useState } from "react";
import axios from 'axios';
import { Result, FetchFunction } from '../interfaces/fetchResult'

const useFetch : FetchFunction = (url : string) => {
  const [fetchResult, setFetchResult] = useState<Result>({
    error: null,
  });

  useEffect(() => {
    const newFetchResult : Result = {};
    axios(url)
      .then((result) => {
        newFetchResult.status = result.status;
        return result.data;
      })
      .then((data) => {
        newFetchResult.data = data;
      })
      .catch((error) => {
        newFetchResult.error = error;
      })
      .then(() => {
        setFetchResult(newFetchResult);
      });
  }, [url]);
  
  return fetchResult.data || fetchResult.error;
};

export default useFetch;