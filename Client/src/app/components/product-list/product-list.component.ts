import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'category', 'imageUrl', 'actions'];

  constructor(
    private productService: ProductService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products.data = data;
    });
  }

  // Function to navigate to product details
  viewProduct(id: number) {
    this.router.navigate([`/product/${id}`]);
  }

  // Function to delete a product
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      if (this.products) {
        this.products.data = this.products.data.filter(product => product.id !== id);
      }
    });
  }

  // Function to navigate to product edit
  editProduct(id: number) {
    this.router.navigate([`/edit-product/${id}`]);
  }
}