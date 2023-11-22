import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurnoDisponible } from '../Models/turnosDisponibles';
import { Turno } from '../Models/turnos';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(private http: HttpClient) { }

  obtenerMisMascotas(): Observable<any>{
    return this.http.get('http://localhost:3000/animales/misMascotas')
  }

  obtenerCentrosEsterilizacion(): Observable<any>{
    return this.http.get('http://localhost:3000/refugios/castraciones')
  }

  obtenerTurnosDisponibles(animalId: number, fecha: Date, refugioId: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('animal_id', animalId.toString());
    params = params.append('turno_fecha', fecha.toISOString()); // Convierte a string ISO

    params = params.append('refugio_id', refugioId.toString());

    return this.http.get('http://localhost:3000/turnos/disponibles', { params: params });
  }

  createTurno(turno: Turno): Observable<any>{
    return this.http.post('http://localhost:3000/turnos',turno)
  }
}
