import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../models/customer.model';
import { Order } from '../models/order.model';
import { Address } from '../models/address.model';
import { CustomPCBuild } from '../models/custom-pc-build.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers'; // API endpoint

  constructor(private http: HttpClient) { }

  // Add a new customer
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer).pipe(
      catchError(this.handleError)
    );
  }

  // Get a specific customer by ID
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Get all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing customer
  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Search for customers based on a query string
  searchCustomers(query: string): Observable<Customer[]> {
    const url = `${this.apiUrl}?query=${query}`;
    return this.http.get<Customer[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Get the orders associated with a specific customer
  getCustomerOrders(id: number): Observable<Order[]> {
    const url = `${this.apiUrl}/${id}/orders`;
    return this.http.get<Order[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Update the address of a customer
  updateCustomerAddress(id: number, address: Address): Observable<Customer> {
    const url = `${this.apiUrl}/${id}/address`;
    return this.http.put<Customer>(url, address).pipe(
      catchError(this.handleError)
    );
  }

  // Get the custom PC builds associated with a specific customer
  getCustomPcBuilds(id: number): Observable<CustomPCBuild[]> {
    const url = `${this.apiUrl}/${id}/custom-pc-builds`;
    return this.http.get<CustomPCBuild[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
