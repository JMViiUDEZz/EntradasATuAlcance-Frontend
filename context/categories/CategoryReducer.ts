
import { IUser } from "../../interfaces";
import { CategoryState } from "./";
import { ICategory } from '../../interfaces';

type AuthActionType =
| { type: '[Category] - Login', payload: ICategory }
| { type: '[Category] - Logout' }


export const CategoryReducer = ( state: CategoryState, action: AuthActionType ): CategoryState => {
    switch (action.type){

        case '[Category] - Login':
            return {
                ...state,
                isLoggedIn: true,
                category: action.payload
            }
        case '[Category] - Logout':
            return{
                ...state,
                isLoggedIn: false,
                category: undefined
            }
        default:
            return state
    }
}