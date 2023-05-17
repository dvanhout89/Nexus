import { CartItem } from "./cart-item.model";

export class Cart {
    id?: number;
    customerId?: number;
    cartItems?: CartItem[];
}
