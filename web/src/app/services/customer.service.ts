import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})

export class CustomerService {
  private customers: Customer[] = [
    {
      _id: 'asdqxcxzcaq',
      name: 'João',
      email: 'joao@gmail.com',
      cpf: '17987450990',
      birthday: new Date('04/07/1997'),
    },
    {
      _id: 'asdqxcxzcaq',
      name: 'João',
      email: 'joao@gmail.com',
      cpf: '17987450990',
      birthday: new Date('04/07/1997'),
    },
    {
      _id: 'asdqxcxzcaq',
      name: 'João',
      email: 'joao@gmail.com',
      cpf: '17987450990',
      birthday: new Date('04/07/1997'),
    },
  ];
  constructor() {}

  getCustomers() {
    return this.customers
  }
}
