import { 
    // ISize,
     IUser } from '.';

export interface IOrder {

    _id? : string;
    user?: IUser | string;
    orderItems: IOrderItem[];
    shippingAddress: ShippingAddress;
    paymentResult?: string;

    numberOfItems: number;
    subTotal     : number;
    tax          : number;
    total        : number;

    isPaid  : boolean;
    paidAt? : string;

    transactionId?: string;


    createdAt?: string;
    updatedAt?: string;
}


export interface IOrderItem {
    // _id      : string;
    // title    : string;
    // size     : ISize;
    // quantity : number;
    // slug     : string;
    // image    : string;
    // price    : number;
    // gender   : string;
    // createdAt: string;
    // updatedAt: any;
    listid: string;
    seller: string;
    event: string;
    date: string;    
    numtickets: number;
    priceperticket: number;
    totalprice: number;
    listtime: string;
    quantity : number;
}


export interface ShippingAddress {
    firstName: string;
    lastName : string;
    address  : string;
    address2?: string;
    zip      : string;
    city     : string;
    country  : string;
    phone    : string;
}