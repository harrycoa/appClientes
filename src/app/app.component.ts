import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appClientes';

  constructor(private _dialog: MatDialog){}

  openCustomerForm(){
    this._dialog.open(CustomerComponent);
  }


}
