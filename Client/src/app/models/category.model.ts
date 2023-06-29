import { Product } from './product.model';

export class Category {
  id: number;
  name: string;
  description: string;
  products: Product[];

  constructor(id: number, name: string, description: string, products: Product[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.products = products;
  }
}
