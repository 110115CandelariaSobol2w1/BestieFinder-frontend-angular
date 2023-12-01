import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MiPerfilService {
  constructor(private http: HttpClient) {}

  miPerfil(): Observable<any> {
    return this.http.get('http://localhost:3000/users/perfil');
  }

  usuarioVoluntario(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios-refugios/voluntario');
  }

  usuarioRefugio(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios-refugios/');
  }
}
