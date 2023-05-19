import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products'; // API endpoint

  constructor(private http: HttpClient) {}

  //Fetch all products from the API
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  //Fetch a single product by its ID from the API
  getProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  //Send a product to the API for creation
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  //Send a product to the API for update
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  //Delete a product by its ID using the API
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

  //Add a product using a Form Submit button
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
