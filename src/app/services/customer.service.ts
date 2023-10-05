import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  addCustomer(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/customer', data);
  }
}
