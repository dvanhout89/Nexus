// import { CartItem } from "./cart-item.model";
// export interface Cart {
//   id?: number;
//   customer: Customer;
//   cartItems?: CartItem[];
// }

import { CartItem } from './cart-item.model';

export class Cart {
  items: CartItem[];

  constructor() {
    this.items = [];
  }

  get totalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.items.reduce((total, item) => total + item.totalPrice, 0);
  }
}