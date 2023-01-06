import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent {
  constructor() { }

  handleAdd() {
    console.log('Add Customer')
  }
}
