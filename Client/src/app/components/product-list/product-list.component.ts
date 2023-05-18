import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products: MatTableDataSource<Product> | undefined;
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'category', 'imageUrl', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = new MatTableDataSource(data);
    });
  }

  // Function to navigate to product details
  viewProduct(id: number) {
    // Implement navigation logic here
  }

  // Function to delete a product
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      // Remove the product from the products list
      this.products.data = this.products.data.filter(product => product.id !== id);
    });
  }

  // Function to navigate to product edit
  editProduct(id: number) {
    // Implement navigation logic here
  }
}

