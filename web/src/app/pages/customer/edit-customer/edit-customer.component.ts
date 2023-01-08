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
  states: State[] = [];

  form: FormGroup = this.fb.group({
    name: [null],
    email: [null],
    document: [null],
    birthday: [null],
    address: [null],
    city: [null],
    stateUf: [null],
    ownHome: [false],
  });

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private localeService: LocaleService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const customerId = this.route.snapshot.paramMap.get('id') || 'new';

    if (customerId !== 'new') {
      this.title = 'Editar Cliente';
      this.getCustomer(+customerId);
    } else {
      this.title = 'Novo Cliente';
    }

    this.id = customerId;
  }

  ngOnInit(): void {
    this.getStates();
  }

  setFormGorup(value: Customer) {
    this.form = this.fb.group({
      name: [value.name],
      email: [value.email],
      document: [value.document],
      birthday: [value.birthday, Validators.required],
      address: [value.address],
      city: [value.city],
      stateUf: [value.stateUf],
      ownHome: value.ownHome,
    });
  }

  getStates() {
    this.localeService.getAll().subscribe((value) => (this.states = value));
  }

  getCustomer(id: number): void {
    this.customerService.getById(id).subscribe((value) => {
      const customer = value;
      this.setFormGorup(customer);
    });
  }

  handleConfirm() {
    if (this.form.valid) {
      const customerData = {
        ...this.form.value,
      };

      const date: string | Moment = customerData.birthday;

      customerData.birthday =
        typeof date == 'string' ? customerData.birthday : date.format();

      console.log({ customerData });

      this.id === 'new'
        ? this.customerService.create(customerData).subscribe(() => {
            window.alert('Cliente cadastrado com sucesso.');
            this.router.navigate(['/customer']);
          })
        : this.customerService.update(+this.id, customerData).subscribe(() => {
            window.alert('Cliente atualizado com sucesso.');
            this.router.navigate(['/customer']);
          });
    }
  }

  handleCancel() {
    this.router.navigate(['/customer']);
  }
}
