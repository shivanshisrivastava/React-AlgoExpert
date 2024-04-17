import { ICart } from "./ICart";
import { IItem } from "./ICart";

export class Cart 
{
    id: number | undefined;
    products : IItem[];
    total: number | undefined;
    totalProducts: number | undefined;
    totalQuantity: number | undefined;



constructor(initializer?: ICart) 
{
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.products) this.products = initializer.products;
    if (initializer.total) this.total = initializer.total;
    if (initializer.totalProducts) this.totalProducts = initializer.totalProducts;
    if (initializer.totalQuantity) this.totalQuantity = initializer.totalQuantity;   
    }
}
