import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.less'],
})
export class AddCustomerComponent implements OnInit {
  customerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.customerForm.valid) {
      const newCustomer: Customer = {
        firstName: this.customerForm.get('firstName')?.value || '',
        lastName: this.customerForm.get('lastName')?.value || '',
        email: this.customerForm.get('email')?.value || '',
        phone: this.customerForm.get('phoneNumber')?.value || '',
        address: this.customerForm.get('addressDetails')?.value || [],
      };

      this.customerService.addCustomer(newCustomer).subscribe(
        () => {
          this.router.navigate(['/customers']);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
    }
  }
}
