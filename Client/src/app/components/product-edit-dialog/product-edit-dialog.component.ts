// src/app/product-edit-dialog/product-edit-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

export interface DialogData {
  product: Product;
}

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.less']
})
export class ProductEditDialogComponent {
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<ProductEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private productService: ProductService
  ) {
    this.product = { ...data.product };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.dialogRef.close(this.product);
    });
  }
}