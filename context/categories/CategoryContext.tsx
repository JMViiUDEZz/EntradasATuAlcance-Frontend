
import { createContext } from 'react';
import { ICategory } from '../../interfaces';

interface ContextProps {
    isLoggedIn: boolean;
    category?: ICategory;
    
    //firmas
    createCategory: (
        catgroup: string,
        catname: string,
        catdesc: string, ) => Promise<{hasError: boolean; message?: string}>
    removeCategory: (catid:string) => Promise<{hasError: boolean; message?: string}>;

}

export const CategoryContext  = createContext( {} as ContextProps );