import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/Customer`);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${environment.apiUrl}/Customer/${id}`);
  }

  create(data: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${environment.apiUrl}/Customer`, data);
  }

  update(id: number, data: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      `${environment.apiUrl}/Customer/${id}`,
      data
    );
  }

  remove(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiUrl}/Customer/${id}`);
  }
}
