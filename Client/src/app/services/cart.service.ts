// import { Injectable } from '@angular/core';
// import { Product } from '../models/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: Product[] = [];

//   constructor() {}

//   addToCart(item: Product): void {
//     this.cartItems.push(item);
//   }

//   removeFromCart(item: Product): void {
//     const index = this.cartItems.indexOf(item);
//     if (index !== -1) {
//       this.cartItems.splice(index, 1);
//     }
//   }

//   getCartItems(): Product[] {
//     return this.cartItems;
//   }

//   clearCart(): void {
//     this.cartItems = [];
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/carts';

  constructor(private http: HttpClient) {}

  getCart(id: number): Observable<Cart> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cart>(url);
  }

  createCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cart);
  }

  updateCart(cart: Cart): Observable<Cart> {
    const url = `${this.apiUrl}/${cart.id}`;
    return this.http.put<Cart>(url, cart);
  }

  deleteCart(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  addCartItem(cartId: number, cartItem: CartItem): Observable<Cart> {
    const url = `${this.apiUrl}/${cartId}/items`;
    return this.http.post<Cart>(url, cartItem);
  }

  updateCartItem(cartId: number, cartItem: CartItem): Observable<Cart> {
    const url = `${this.apiUrl}/${cartId}/items/${cartItem.id}`;
    return this.http.put<Cart>(url, cartItem);
  }

  deleteCartItem(cartId: number, cartItemId: number): Observable<void> {
    const url = `${this.apiUrl}/${cartId}/items/${cartItemId}`;
    return this.http.delete<void>(url);
  }
}
