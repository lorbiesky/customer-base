import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.sass'],
})

export class ListCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  customers: Customer[] = [];
  columnsToDisplay = ['id', 'name', 'email', 'cpf', 'actions'];

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  handleAdd() {
    this.router.navigate([`/customer/new`]);
  }

  handleEdit(id: number) {
    this.router.navigate([`/customer/${id}`]);
  }

  handleRemove(id: number) {
    this.router.navigate([`/customer/${id}`]);
  }
}
