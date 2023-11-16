import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Refugio } from '../Models/refugio';


@Injectable({
  providedIn: 'root'
})
export class CrearRefugioService {

  constructor(private http: HttpClient) { }

  crearRefugio(refugio: Refugio): Observable<any>{
    return this.http.post('http://localhost:3000/refugios/userRefugio', refugio);
  }
}
