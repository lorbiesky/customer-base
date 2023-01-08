import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { State } from 'src/app/core/models/State';
import { LocaleService } from 'src/app/core/services/locale.service';
import { Moment } from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/models/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  id: string | number;
  title: string;
  states: State[];

  form: FormGroup;

  constructor(
    private customerService: CustomerService,
    private localeService: LocaleService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const customerId = this.route.snapshot.paramMap.get('id') || 'new';

    customerId !== 'new'
      ? (this.title = 'Editar Cliente')
      : (this.title = 'Novo Cliente');

    this.id = customerId;
  }

  ngOnInit() {
    this.setFormGorup();
    this.getStates();
  }

  setFormGorup() {
    let customer: Customer;

    if (this.id !== 'new') {
      const response = this.customerService.getCustomerById(Number(this.id));
      if (!response) throw new Error('Customer not found.');
      customer = response;
    } else {
      customer = new Customer();
    }

    this.form = this.fb.group({
      name: [customer.name],
      email: [customer.email],
      document: [customer.document],
      birthday: [customer.birthday, Validators.required],
      address: [customer.address],
      city: [customer.city],
      stateUf: [customer.stateUf],
      ownHome: customer.ownHome,
    });
  }

  getStates() {
    this.localeService.getStates().subscribe({
      next: (response) => {
        this.states = response;
      },
      error: console.log,
    });
  }

  handleConfirm() {
    if (this.form.valid) {
      const customerData = {
        ...this.form.value,
      };

      const date: string | Moment = customerData.birthday;

      customerData.birthday =
        typeof date == 'string'
          ? date.split('-').reverse().join('/')
          : date.format('DD/MM/YYYY');

      console.log({ customerData });
    }
  }

  handleCancel() {
    this.router.navigate(['/customer']);
  }
}
