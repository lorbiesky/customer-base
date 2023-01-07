import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.sass']
})
export class EditCustomerComponent {
  customer: Customer = {
    id: 0,
    name: '',
    email: '',
    document: '',
    birthday: new Date,
  }
}
