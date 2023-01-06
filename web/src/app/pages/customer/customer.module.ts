import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

import { MatTableModule } from '@angular/material/table';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, MatTableModule],
  exports: [],
  declarations: [CustomerComponent, EditCustomerComponent],
  providers: [CustomerService],
})
export class CustomerModule { }
