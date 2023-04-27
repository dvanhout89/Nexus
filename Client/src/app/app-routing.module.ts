import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
//import { ProductsComponent } from './products/products.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  //{ path: 'products', component: ProductsComponent },
  { path: 'estimates', component: EstimatesComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'pc-builder', component: PcBuilderComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
