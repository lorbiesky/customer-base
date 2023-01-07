import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '../models/State';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get<State[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );
  }
}
