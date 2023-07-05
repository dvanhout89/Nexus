import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

export interface DialogData {
  customer: Customer;
}

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.less'],
})
export class CustomerEditDialogComponent {
  customer: Customer;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private customerService: CustomerService
  ) {
    this.customer = { ...data.customer };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCustomer(): void {
    this.customerService.updateCustomer(this.customer).subscribe(() => {
      this.dialogRef.close(this.customer);
    });
  }
}
