import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 0,
      name: 'João Lorbiesky',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: '1997-07-04',
      address: '',
      city: '',
      stateUf: '',
      ownHome: false,
    },
    {
      id: 1,
      name: 'João Dias',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: '1997-07-04',
      address: '',
      city: '',
      stateUf: '',
      ownHome: false,
    },
    {
      id: 2,
      name: 'João Victor',
      email: 'joao@gmail.com',
      document: '17987450990',
      birthday: '1997-07-04',
      address: '',
      city: '',
      stateUf: '',
      ownHome: false,
    },
  ];

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.customers;
  }

  getCustomerById(id: number): Customer | undefined {
    return this.customers.find((e) => e.id === id);
  }

  createCustomer(data: Customer) {}

  updateCustomer(id: number, data: Customer) {}

  removeCustomer(id: number) {}
}
