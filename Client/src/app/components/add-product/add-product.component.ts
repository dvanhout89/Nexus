// src/app/add-product/add-product.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less'],
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(' ', Validators.required),
    description: new FormControl(' ', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)]),
    quantity: new FormControl(0, [Validators.required, Validators.min(1)]),
    category: new FormControl(' ', Validators.required),
    imageUrl: new FormControl(' '),
  });

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        name: this.productForm.get('name')?.value || '',
        description: this.productForm.get('description')?.value || '',
        price: this.productForm.get('price')?.value || 0,
        quantity: this.productForm.get('quantity')?.value || 0,
        category: this.productForm.get('category')?.value || '',
        imageUrl: this.productForm.get('imageUrl')?.value || '',
      };

      this.productService.addProduct(newProduct).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {}
  }
}
