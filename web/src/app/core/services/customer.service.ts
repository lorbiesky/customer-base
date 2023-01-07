import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 0,
      name: 'João',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: new Date('04/07/1997'),
      ownHome: false,
    },
    {
      id: 1,
      name: 'João',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: new Date('04/07/1997'),
      ownHome: false,
    },
    {
      id: 2,
      name: 'João',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: new Date('04/07/1997'),
      ownHome: false,
    },
  ];
  constructor() {}

  getCustomers() {
    return this.customers;
  }
}
