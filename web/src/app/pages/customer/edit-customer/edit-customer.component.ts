import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/core/services/customer.service';
import { State } from 'src/app/core/models/State';
import { LocaleService } from 'src/app/core/services/locale.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  id: string | null = this.route.snapshot.paramMap.get('id');
  title: string = 'Novo Cliente';
  states: State[] = [];

  customer: Customer = {
    name: '',
    email: '',
    document: '',
    birthday: new Date(),
    ownHome: false,
  };

  constructor(
    private customerService: CustomerService,
    private localeService: LocaleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.localeService.getStates().subscribe({
      next: (response) => {
        this.states = response;
      },
      error: console.log,
    });

    this.title = this.id === 'new' ? 'Novo Ciente' : 'Editar Cliente';
  }

  handleConfirm() {}

  handleCancel() {
    this.router.navigate(['/customer']);
  }
}
