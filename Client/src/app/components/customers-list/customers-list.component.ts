import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.less']
})
export class CustomerListComponent implements OnInit {
  customers = new MatTableDataSource<Customer>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'address', 'actions'];

  constructor(
    private customerService: CustomerService,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers.data = data;
    });
  }

  // Function to navigate to customer details
  viewCustomer(id: number) {
    this.router.navigate([`/customer/${id}`]);
  }

  // Function to delete a customer
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      if (this.customers) {
        this.customers.data = this.customers.data.filter(customer => customer.id !== id);
      }
    });
  }

  // Function to navigate to customer edit
  editCustomer(id: number) {
    this.router.navigate([`/edit-customer/${id}`]);
  }
}
