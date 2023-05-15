import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
//import { ProductsComponent } from './products/products.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';
import { UsersComponent } from './users/users.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  //{ path: 'products', component: ProductsComponent },
  { path: 'estimates', component: EstimatesComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'pc-builder', component: PcBuilderComponent },
  { path: 'users', component: UsersComponent },

  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'add', component: AddProductComponent },

  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'add', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
