import useSWR, { SWRConfiguration } from 'swr';
import { IVenue } from '../interfaces/venues/IVenue';


export const useCategories = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IVenue[]>(`http://194.61.28.54:82/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        venues: data || [],
        isLoading: !error && !data,
        isError: error
    }
}