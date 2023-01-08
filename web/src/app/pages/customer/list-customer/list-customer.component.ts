import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
    this.getCustomers();
  }

  customers: Customer[] = [];
  columnsToDisplay = ['id', 'name', 'email', 'cpf', 'actions'];

  ngOnInit() {}

  getCustomers(): void {
    this.customerService
      .getAll()
      .subscribe((customer) => (this.customers = customer));
  }

  handleAdd() {
    this.router.navigate([`/customer/new`]);
  }

  handleEdit(id: number) {
    this.router.navigate([`/customer/${id}`]);
  }

  handleRemove(id: number) {
    if (window.confirm('Deseja realmente deletar esse usuário?')) {
      this.customerService.remove(id).subscribe((deleted) => {
        if (deleted) {
          window.alert('Usuário deletado com sucesso!');
          location.reload();
        } else {
          window.alert('Usuário não pode ser deletado!');
        }
      });
    }
  }
}
