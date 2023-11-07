import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../Models/registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  signup(registro: Registro): Observable<any>{
    return this.http.post('http://localhost:3000/auth/register', registro)
  }

}
