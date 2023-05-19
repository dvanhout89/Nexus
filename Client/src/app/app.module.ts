//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Navigation Components
import { SideNavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

//Global Angular Material Imports
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

//Page Route Components
import { EstimatesComponent } from './estimates/estimates.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { PcBuilderComponent } from './pc-builder/pc-builder.component';

//Components
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductsComponent } from './products/products.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductEditDialogComponent } from './components/product-edit-dialog/product-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    CustomersComponent,
    ToolbarComponent,
    EstimatesComponent,
    InvoicesComponent,
    PcBuilderComponent,
    AddProductComponent,
    AddCustomerComponent,
    ProductDetailComponent,
    CustomerDetailsComponent,
    ProductListComponent,
    CustomersListComponent,
    ProductsComponent,
    OrderDetailComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    OrderListComponent,
    CartComponent,
    ProductEditDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
