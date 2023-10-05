import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { CustomerService } from '../services/customer.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  customerForm: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _customerService: CustomerService,
    private _dialogRef: DialogRef<CustomerComponent>) {
    this.customerForm = this._fb.group({
      firstName: '',
      lastName:'',
      address: '',
      city: '',
      country: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
      enabled: '',

    });
  }

  onFormSubmit(){
    if(this.customerForm.valid){
      this._customerService.addCustomer(this.customerForm.value).subscribe({
        next: (response: any) => {
          alert('Customer added successfuly');
          this._dialogRef.close();
        },
        error : (err: any) => {
          alert("Error");
        },
      });
    }
  }

}
