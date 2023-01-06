import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent {
  title: string = "";
  constructor() { }

  handleAdd() {
    console.log('Add Customer')
  }

  onTitleChange(e: any) {
    this.title = e.title;
 }
}
