import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';


import { ProductListComponent } from './components/product-list/product-list.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'estimates', component: EstimatesComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'pc-builder', component: PcBuilderComponent },
  //Product
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent },
  //Customer
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
