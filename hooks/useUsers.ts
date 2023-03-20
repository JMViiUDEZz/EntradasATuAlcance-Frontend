import useSWR, { SWRConfiguration } from 'swr';
import { IUser } from '../interfaces';


export const useUsers = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IUser[]>(`http://194.61.28.54:80/api${url}`, config);
    // const { data, error } = useSWR<ICategory[]>(`http://localhost:3000/api${url}`, config);
    // console.log("data = ", data, error);
    console.log(data);
    return {
        users: data || [],
        isLoading: !error && !data,
        isError: error
    }
}