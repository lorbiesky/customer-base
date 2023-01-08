import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ErrorDialogComponent, SuccessDialogComponent, ConfirmDialogComponent],
  imports: [AppMaterialModule, CommonModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
