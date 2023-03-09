export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IRespuestaLogin2 {
    token: string;
    email: string;
    password: string;
}

export interface IUserApi {
    email: string;
    password: string;
    fullname: string;
    isActive?: boolean;
    roles: string[]
}

export interface IUser {
    userid?: string;
    username?: string;
    firstname?: string; 
    lastname?: string;
    fullname: string;
    city?: string;
    state?: string;
    email: string;
    password: string;    
    phone?: string;
    likesports?: boolean;
    liketheatre?: boolean;
    likeconcerts?: boolean;
    likejazz?: boolean;
    likeclassical?: boolean;
    likeopera?: boolean;
    likerock?: boolean;
    likevegas?: boolean;
    likebroadway?: boolean;
    likemusicals?: boolean;
    // id?: number;
    // fullName: string;
    // email: string;
    // password: string;
    isActive?: boolean;
    token?: string;
    roles?: string[];
}
export interface IRespuestaLogin {
    token: string;
    user: IUser;

}