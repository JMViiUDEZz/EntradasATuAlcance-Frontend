import useSWR, { SWRConfiguration } from 'swr';
import { ICategory } from '../interfaces';


export const useCategories = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICategory[]>(`http://194.61.28.54:80/api${url}`, config);
    // const { data, error } = useSWR<ICategory[]>(`http://localhost:3000/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        categories: data || [],
        isLoading: !error && !data,
        isError: error
    }
}