import { IClient, IPayMethod, IProduct } from "app/Interfaces";

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

export const Clients: IClient[] = [
    {
        clientNo: 1,
        clientName: 'Javier',
        phone:  123456789,
        address: 'Guatemala',
        quota: 1,
        priceSale: 50
    },
    {
        clientNo: 2,
        clientName: 'Fernando',
        phone:  123456789,
        address: 'Perú',
        quota: 1,
        priceSale: 78
    },
    {
        clientNo: 3,
        clientName: 'Erick',
        phone:  123456789,
        address: 'Ecuador',
        quota: 1,
        priceSale: 50
    }
]

export const PayMethods: IPayMethod[] = [
    {
        id: 1,
        value: 'Efectivo'
    },
    {
        id: 2,
        value: 'Débito'
    },
    {
        id: 3,
        value: 'Crédito'
    }
]