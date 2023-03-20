import { FC, useReducer, useEffect } from 'react';
import { AuthContext, authReducer  } from './';
import { IUser } from '../../interfaces';
import entradasATuAlcanceApi from '../../api/EntradasATuAlcanceApi';
import Cookies from 'js-cookie';
import axios from 'axios';
// import { signOut } from 'next-auth/react';
export interface AuthState{
    isLoggedIn: boolean;
    user?: IUser;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}
interface Props{
    children: any
}

export const AuthProvider:FC<({ children: any })> = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    // console.log(state);


    useEffect( ()=>{
        checkToken()
    }, []);
    const checkToken = async() => {
        //llamar al endpoint
        //Revalidar el token y guardar en cockies
        //dispatch login

        //Mal --> borrar token de las cockies
    }

    const loginUser = async (email: string, password: string):Promise<boolean> => {
        try {
            const { data } = await entradasATuAlcanceApi.post('/auth/login', { email, password });
            // console.log(data);
            const { token, user } = data;
            // console.log(user);
            Cookies.set('token', token);
            Cookies.set('Fullname', user.fullname); 
            // Cookies.set('FullName', data.fullname); 
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) { //credenciales falsas
            return false;
        }
    } 
                         //   {...user}
    const registerUser = async (email: string, password: string, fullname: string ):Promise<{hasError: boolean; message?: string}>=> {
        try {
            const { data } = await entradasATuAlcanceApi.post ('/auth/register', { email, fullname, password })
            console.log(data)
            const { token, user } = data;
            Cookies.set('token', token);
            // Cookies.set('rol', user.roles);
            // Cookies.set('Fullname', user.fullname); 
            //mando a llamar al login pq ya se autenticó
            console.log(user);

            dispatch({ type: '[Auth] - Login', payload: user });
            // console.log(user);

            return {
                hasError: false,
                message: 'Usuario creado con éxito'
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
                message: 'No se puede crear el usuario, intentaló de nuevo'
            }
        }
    }

    const logout = () => {
        // Cookies.remove('cart');
        // Cookies.remove('firstName');
        Cookies.remove('token');
        
        // signOut();
        // router.reload();
        // Cookies.remove('token');
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}