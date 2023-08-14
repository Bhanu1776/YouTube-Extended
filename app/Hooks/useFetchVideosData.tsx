/* eslint-disable prettier/prettier */
import { useQuery } from '@tanstack/react-query';

// ? This is a custom Hook created to fetch data using TanStack React-Query
//! Passing 'QueryName' and 'API_URL' passing is mandatory!

type SuccessCallback = (videoData: any) => void;

const useFetchVideosData = (
  QueryName: string,
  API_URL: any,
  InitialLoad?: boolean,
  onSuccess?: SuccessCallback,
  onError?: SuccessCallback,
): any =>
  // Returning below useQuery Func
  useQuery({
    queryKey: [QueryName],
    queryFn: () => fetch(API_URL).then((res) => res.json()), //* Abstracted Business logic(API)
    refetchOnWindowFocus: false, // On every window focus, this will stop calling api every time window gets focused
    refetchInterval: false, // This will not call api every time interval of time(useful for stocks app for continuous updates) //* Polling
    enabled: InitialLoad,
    onSuccess,
    onError,
    // cacheTime: 500000,
    // staleTime: 10000, // This will not call api for the next 1min it will use cached data (by default it is set to 0)
  });

export default useFetchVideosData;
