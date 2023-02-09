import useSWR, { SWRConfiguration } from 'swr';
import { ICategory } from '../interfaces/categories/ICategory';


export const UseCategories = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICategory[]>(`http://194.61.28.54:82/api${url}`, config);
    console.log("data = ", data, error);
    return {
        categories: data || [],
        isLoading: !error && data,
        isError: error
    }
}