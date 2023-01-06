import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) { }

  customers: Customer[] = []
  columnsToDisplay = ['_id', 'name', 'email', 'cpf']

  ngOnInit() {
    this.customers = this.customerService.getCustomers()
  }

  onRowClick() {
    console.log('here')
  }
}
