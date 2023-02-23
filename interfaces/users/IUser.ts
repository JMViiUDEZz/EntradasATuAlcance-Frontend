

export interface IUser {
    userid: string;
    username: string;
    firstname: string; 
    lastname: string;
    fullname: string;
    city: string;
    state: string;
    email: string;
    password: string;    
    phone: string;
    likesports: boolean;
    liketheatre: boolean;
    likeconcerts: boolean;
    likejazz: boolean;
    likeclassical: boolean;
    likeopera: boolean;
    likerock: boolean;
    likevegas: boolean;
    likebroadway: boolean;
    likemusicals: boolean;

    id?: number;
    fullName: string;
    // email: string;
    // password: string;
    isActive?: boolean;
    token?: string;
    roles?: string[]
}