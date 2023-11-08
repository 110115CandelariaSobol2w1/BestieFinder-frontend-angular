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
  loggedIn = new BehaviorSubject<boolean>(false);
  currentUserSubject: BehaviorSubject<Login> = new BehaviorSubject<Login>(
    JSON.parse(localStorage.getItem('currentUser') || '{}')
  );
  currentUser: Observable<Login> = this.currentUserSubject.asObservable();

  
  constructor(private http: HttpClient) {
    console.log('Servicio de Autenticación está corriendo');
  }
  
  iniciarSesion(login: Login): Observable<any> {
    return this.http.post(this.url, login).pipe(
      map((data) => {
        const userData = data as Login; // Realiza una conversión explícita
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        this.currentUserSubject.next(userData);
        this.loggedIn.next(true);
        return userData;
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
