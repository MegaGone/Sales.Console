import { IProduct } from "app/Interfaces";

export const Products: IProduct[] = [
    {
        id: 1,
        code: 1011,
        item: 'Arroz',
        quantity: 1,
        price: 50,
        subTotal: 50,
        discount: 0
    },
    {
        id: 2,
        code: 2022,
        item: 'Azúcar',
        quantity: 2,
        price: 70,
        subTotal: 140,
        discount: 0
    },
    {
        id: 3,
        code: 3033,
        item: 'Harina',
        quantity: 5,
        price: 33,
        subTotal: 165,
        discount: 0
    }
]