
export interface IItem
{
    id: number | undefined;
    title : string;
    price: number | undefined ;
    quantity: number | undefined;
    total: number | undefined;
}


export interface ICart
{
    id: number | undefined;
    products: IItem[];
    total: number | undefined;
    totalProducts: number | undefined;
    totalQuantity: number | undefined;
}