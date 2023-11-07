import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  iniciarSesion(login: Login): Observable<any>{
    return this.http.post('http://localhost:3000/auth/login', login)
  }
}
