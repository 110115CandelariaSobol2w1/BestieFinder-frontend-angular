import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/login';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:3000/auth/login';
  currentUserSubject: BehaviorSubject<Login>;
  currentUser: Observable<Login>;
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    console.log('Servicio de Atuenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<Login>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  iniciarSesion(login: Login): Observable<any> {
    //console.log(login)
    return this.http.post<any>(this.url, login).pipe(
      map((data) => {
        localStorage.setItem('currentUser', JSON.stringify(data.token));

        this.currentUserSubject.next(data);
        this.loggedIn.next(true);

        return {
          success: 'login correcto',
          token: data.token
        }

      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  get usuarioAutenticado(): Login {
    return this.currentUserSubject.value;
  }

  get estaAutenticado(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
