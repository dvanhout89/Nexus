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

  addItem(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find((item) => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new CartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  removeItem(item: CartItem): void {
    const itemIndex = this.items.findIndex((i) => i.product.id === item.product.id);

    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }

  clear(): void {
    this.items = [];
  }
}