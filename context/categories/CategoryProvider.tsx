import { FC, useReducer, useEffect } from 'react';
import { CategoryContext, CategoryReducer  } from './';
import { ICategory } from '../../interfaces';
import entradasATuAlcanceApi from '../../api/EntradasATuAlcanceApi';
import Cookies from 'js-cookie';
import axios from 'axios';
// import { signOut } from 'next-auth/react';
export interface CategoryState{
    isLoggedIn: boolean;
    category?: ICategory;
}
const AUTH_INITIAL_STATE: CategoryState = {
    isLoggedIn: false,
    category: undefined
}
interface Props{
    children: any
}

export const CategoryProvider:FC<({ children: any })> = ({ children }) => {
    const [ state, dispatch ] = useReducer( CategoryReducer, AUTH_INITIAL_STATE );
    // console.log(state);


    // useEffect( ()=>{
    //     checkToken()
    // }, []);
    // const checkToken = async() => {
        //llamar al endpoint
        //Revalidar el token y guardar en cockies
        //dispatch login

        //Mal --> borrar token de las cockies
    // }

                         //   {...user}
    const createCategory = async (
        catgroup: string,
        catname: string,
        catdesc: string):Promise<{hasError: boolean; message?: string}>=> {
        try {
            const { data } = await entradasATuAlcanceApi.post ('/categories', {
                catgroup,
                catname,
                catdesc})
            console.log(data)
            const {
                //  token,
                  category } = data;
            // Cookies.set('token', token);
            // Cookies.set('rol', user.roles);
            // Cookies.set('Fullname', user.fullname); 
            //mando a llamar al login pq ya se autenticó
            console.log(category);

            dispatch({ type: '[Category] - Login', payload: category });
            // console.log(user);

            return {
                hasError: false,
                message: 'Categoria creada con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear la categoria, intentaló de nuevo'
            }
        }
    }

    const removeCategory = async (catid:string):Promise<{hasError: boolean; message?: string}>=> {
        try {
            const {data} = await entradasATuAlcanceApi.delete ('/categories/${catid}')
            // console.log(data)
            const {
            //     //  token,
                  category } = data;
            // Cookies.set('token', token);
            // Cookies.set('rol', user.roles);
            // Cookies.set('Fullname', user.fullname); 
            //mando a llamar al login pq ya se autenticó
            console.log(category);
            return data.data;

            dispatch({ type: '[Category] - Login', payload: category });
            // console.log(user);

            return {
                hasError: false,
                message: 'Categoria eliminada con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede eliminar la categoria, intentaló de nuevo'
            }
        }
    }

    return (
        <CategoryContext.Provider value={{
            ...state,
            createCategory,
            removeCategory,
        }}>
            { children }
        </CategoryContext.Provider>
    )
}