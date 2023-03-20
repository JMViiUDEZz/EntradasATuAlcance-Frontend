import useSWR, { SWRConfiguration } from 'swr';
import { IList } from '../interfaces';


export const useListings = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IList[]>(`http://194.61.28.54:80/api${url}`, config);
    // const { data, error } = useSWR<IList[]>(`http://localhost:3000/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        listings: data || [],
        isLoading: !error && !data,
        isError: error
    }
}