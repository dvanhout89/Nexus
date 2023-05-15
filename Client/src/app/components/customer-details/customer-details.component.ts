import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less'],
})
export class CustomerDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentCustomer: Customer = {
    title: '',
    description: '',
    published: false,
  };

  message = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCustomer(this.route.snapshot.params['id']);
    }
  }

  getCustomer(id: string): void {
    this.customerService.get(id).subscribe({
      next: (data) => {
        this.currentCustomer = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentCustomer.title,
      description: this.currentCustomer.description,
      published: status,
    };

    this.message = '';

    this.customerService.update(this.currentCustomer.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentCustomer.published = status;
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
