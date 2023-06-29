import { Customer } from './customer.model';
import { OrderItem } from './order-item.model';

export interface Order {
    id: number;
    customer: Customer;
    items: OrderItem[];
    totalAmount: number;
    orderDate: Date;
  }
