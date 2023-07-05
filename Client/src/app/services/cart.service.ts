// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Cart } from '../models/cart.model';
// import { CartItem } from '../models/cart-item.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private apiUrl = 'http://localhost:8080/api/carts';

//   constructor(private http: HttpClient) {}

//   getCart(id: number): Observable<Cart> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<Cart>(url);
//   }

//   createCart(cart: Cart): Observable<Cart> {
//     return this.http.post<Cart>(this.apiUrl, cart);
//   }

//   updateCart(cart: Cart): Observable<Cart> {
//     const url = `${this.apiUrl}/${cart.id}`;
//     return this.http.put<Cart>(url, cart);
//   }

//   deleteCart(id: number): Observable<void> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<void>(url);
//   }

//   addCartItem(cartId: number, cartItem: CartItem): Observable<Cart> {
//     const url = `${this.apiUrl}/${cartId}/items`;
//     return this.http.post<Cart>(url, cartItem);
//   }

//   updateCartItem(cartId: number, cartItem: CartItem): Observable<Cart> {
//     const url = `${this.apiUrl}/${cartId}/items/${cartItem.id}`;
//     return this.http.put<Cart>(url, cartItem);
//   }

//   deleteCartItem(cartId: number, cartItemId: number): Observable<void> {
//     const url = `${this.apiUrl}/${cartId}/items/${cartItemId}`;
//     return this.http.delete<void>(url);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = 'http://localhost:8080/api/carts';
  cartService: any;

  constructor(private http: HttpClient) {}

  getCart(cartId: number): Observable<Cart> {
    const url = `${this.baseUrl}/${cartId}`;
    return this.http.get<Cart>(url);
  }

  createCart(customerId: number): Observable<Cart> {
    const url = `${this.baseUrl}`;
    const cartData = { customerId };
    return this.http.post<Cart>(url, cartData);
  }

  addItemToCart(cartId: number, productId: number, quantity: number): Observable<Cart> {
    const url = `${this.baseUrl}/${cartId}/items`;
    const itemData = { productId, quantity };
    return this.http.post<Cart>(url, itemData);
  }

  updateCartItemQuantity(cartId: number, itemId: number, quantity: number): Observable<Cart> {
    const url = `${this.baseUrl}/${cartId}/items/${itemId}`;
    const itemData = { quantity };
    return this.http.put<Cart>(url, itemData);
  }

  removeItemFromCart(cartId: number, itemId: number): Observable<Cart> {
    const url = `${this.baseUrl}/${cartId}/items/${itemId}`;
    return this.http.delete<Cart>(url);
  }

  clearCart(cartId: number): Observable<Cart> {
    const url = `${this.baseUrl}/${cartId}/clear`;
    return this.http.delete<Cart>(url);
  }

  calculateTotalPrice(cart: Cart): number {
    return cart.items.reduce((total, item) => {
      const itemPrice = item.product?.price || 0;
      return total + (itemPrice * item.quantity);
    }, 0);
  }

  calculateTotalQuantity(cart: Cart): number {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(cart: Cart, product: Product, quantity: number): void {
    const existingItem = cart.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      // const newItem: CartItem = {
      //   id: product.id,
      //   quantity: quantity
      // };
      const newItem: CartItem = {
        product: { id: 1, name: 'Example Product', price: 10.99 }, // Example product object
        quantity: 1,
        totalPrice: 10.99, // Calculate the total price based on quantity and product price
      };
      this.cartService.addItem(newItem);
    }
  }
}
