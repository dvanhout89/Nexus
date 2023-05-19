// src/app/product-detail/product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      width: '250px',
      data: { product: this.product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  deleteProduct(): void {
    if (this.product && this.product.id) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);

        this.snackBar.open('Product deleted successfully 🗑️👍🏻', '', {
          duration: 3000, //
        });
      });
    } else {
      console.error('Product or product ID is not defined.');
    }
  }
}
