
import { createContext } from 'react';
import { IUser } from '../../interfaces/users/IUser';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;
    
    //firmas
    loginUser: (email: string, password: string) => Promise<boolean>;
    registerUser: (email: string, password: string, fullname: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );