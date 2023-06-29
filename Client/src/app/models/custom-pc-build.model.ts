import { Customer } from './customer.model';
import { Product } from './product.model';

export interface CustomPCBuild {
  id: number;
  name: string;
  description: string;
  components: PCComponent[];
  customer: Customer;
  totalPrice: number;
  totalProducts: number;
}

export interface PCComponent {
  category: string;
  products: Product[];
}
