import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less'],
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.customerService
      .getCustomer(id)
      .subscribe((customer) => (this.customer = customer));
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      width: '250px',
      data: { customer: this.customer },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  deleteCustomer(): void {
    if (this.customer && this.customer.id) {
      this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
        this.router.navigate(['/customers']);

        this.snackBar.open('Customer deleted successfully 🗑️👍🏻', '', {
          duration: 3000, //
        });
      });
    } else {
      console.error('Customer or customer ID is not defined.');
    }
  }
}
