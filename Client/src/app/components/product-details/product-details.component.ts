import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentProduct: Product = {
    title: '',
    description: '',
    published: false,
  };

  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCustomer(this.route.snapshot.params['id']);
    }
  }

  getCustomer(id: string): void {
    this.productService.get(id).subscribe({
      next: (data) => {
        this.currentProduct = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentProduct.title,
      description: this.currentProduct.description,
      published: status,
    };

    this.message = '';

    this.productService.update(this.currentProduct.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentProduct.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateCustomer(): void {
    this.message = '';

    this.customerService
      .update(this.currentCustomer.id, this.currentCustomer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This customer was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/customers']);
      },
      error: (e) => console.error(e),
    });
  }
}

