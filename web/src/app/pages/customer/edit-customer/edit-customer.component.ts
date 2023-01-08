import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { State } from 'src/app/core/models/State';
import { LocaleService } from 'src/app/core/services/locale.service';
import { Moment } from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/core/models/Customer';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

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
    private fb: FormBuilder,
    private dialog: MatDialog
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
    this.localeService.getAll().subscribe({
      next: (value) => (this.states = value),
      error: () => this.onError('Erro ao tentar obter Estados.'),
    });
  }

  getCustomer(id: number): void {
    this.customerService.getById(id).subscribe({
      next: (value) => {
        const customer = value;
        this.setFormGorup(customer);
      },
      error: () => this.onError('Erro ao tentar obter dados do usuário.'),
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

      this.id === 'new'
        ? this.customerService.create(customerData).subscribe({
            next: () => {
              this.onSuccess('Cliente cadastrado com sucesso.');
            },
            error: () => this.onError('Erro ao cadastrar cliente.'),
          })
        : this.customerService.update(+this.id, customerData).subscribe({
            next: () => {
              this.onSuccess('Cliente atualizado com sucesso.');
            },
            error: () => this.onError('Erro ao atualizar cliente.'),
          });
    }
  }

  handleCancel() {
    this.router.navigate(['/customer']);
  }

  onSuccess(successMsg: string) {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: successMsg,
    });

    dialogRef
      .afterClosed()
      .subscribe(() => this.router.navigate(['/customer']));
  }

  onError(errorMsg: string) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });

    dialogRef
      .afterClosed()
      .subscribe(() => this.router.navigate(['/customer']));
  }
}
