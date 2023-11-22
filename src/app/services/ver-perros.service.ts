import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerPerrosService {

  constructor(private http: HttpClient) { }

  obtenerPerros():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/byTipo/1');
  }

  obtenerPerrosAdopcion():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/adopcion/perros');
  }

  obtenerPerrosPerdidos():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/perdidos/perros');
  }

  obtenerPerrosEncontrados():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/encontrados/perros');
  }

}
