export interface IProduct {
    id      : number | string;
    code    : number;
    item    : string;
    quantity: number;
    price   : number;
    subTotal: number;
    discount: number;
}