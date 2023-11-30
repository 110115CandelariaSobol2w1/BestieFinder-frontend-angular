import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http: HttpClient) { }

  crearOrdenDePago(formData: any){
    return this.http.post('http://localhost:3000/payments/create', formData)
  }
}
