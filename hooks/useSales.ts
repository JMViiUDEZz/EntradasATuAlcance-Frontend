import useSWR, { SWRConfiguration } from 'swr';
import { ISale } from '../interfaces';


export const useSales = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ISale[]>(`http://194.61.28.54:80/api${url}`, config);
    // const { data, error } = useSWR<ISale[]>(`http://localhost:3000/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        sales: data || [],
        isLoading: !error && !data,
        isError: error
    }
}