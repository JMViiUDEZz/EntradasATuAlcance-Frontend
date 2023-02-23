import useSWR, { SWRConfiguration } from 'swr';
import { IEvent } from '../interfaces/events/IEvent';


export const useCategories = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IEvent[]>(`http://194.61.28.54:82/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        events: data || [],
        isLoading: !error && !data,
        isError: error
    }
}