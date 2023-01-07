import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { NgxMaskModule } from 'ngx-mask';

const MaterialModules = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ...MaterialModules,
    NgxMaskModule.forChild(),
  ],
  exports: [],
  declarations: [
    CustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
