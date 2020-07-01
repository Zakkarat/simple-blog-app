import { useEffect, useState } from "react";
import axios from 'axios';
import { Result } from '../interfaces/fetchResult'

const useFetch = (url : string) => {
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
  }, []);
  
  return fetchResult.data || fetchResult.error;
};

export default useFetch;