import useSWR, { SWRConfiguration } from 'swr';
import { IDate } from '../interfaces';


export const useDates = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IDate[]>(`http://194.61.28.54:80/api${url}`, config);
    // const { data, error } = useSWR<IDate[]>(`http://localhost:3000/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        dates: data || [],
        isLoading: !error && !data,
        isError: error
    }
}