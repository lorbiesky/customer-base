import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/models/Customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.getCustomers();
  }

  customers: Customer[] = [];
  columnsToDisplay = ['id', 'name', 'email', 'cpf', 'actions'];

  ngOnInit() {}

  getCustomers(): void {
    this.customerService.getAll().subscribe({
      next: (customer) => (this.customers = customer),
      error: () => this.onError('Erro ao tentar carregar os clientes.'),
    });
  }

  handleAdd() {
    this.router.navigate([`/customer/new`]);
  }

  handleEdit(id: number) {
    this.router.navigate([`/customer/${id}`]);
  }

  handleRemove(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja realmente deletar esse usuário?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.customerService.remove(id).subscribe({
          next: (deleted) => {
            if (deleted) {
              this.onSuccess('Usuário deletado com sucesso!');
            } else {
              this.onError('Usuário não pode ser deletado.');
            }
          },
          error: () => this.onError('Usuário não pode ser deletado.'),
        });
      }
    });
  }

  onSuccess(successMsg: string) {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: successMsg,
    });

    dialogRef.afterClosed().subscribe(() => location.reload());
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
