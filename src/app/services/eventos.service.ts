import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../Models/eventos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  crearEvento(evento: Evento){
    return this.http.post('http://localhost:3000/eventos', evento);
  }

  obtenerEventos(): Observable<any>{
    return this.http.get('http://localhost:3000/eventos');
  }
  
}
