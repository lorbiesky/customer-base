import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const MaterialModules = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, ...MaterialModules],
  exports: [],
  declarations: [CustomerComponent, EditCustomerComponent, ListCustomerComponent],
  providers: [CustomerService],
})
export class CustomerModule {}
