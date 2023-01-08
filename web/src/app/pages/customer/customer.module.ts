import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { NgxMaskModule } from 'ngx-mask';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    NgxMaskModule.forChild(),
    SharedModule,
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
