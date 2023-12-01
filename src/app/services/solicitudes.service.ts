import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient) {}

  solicitudesPendientes(): Observable<any>{
    return this.http.get('http://localhost:3000/usuarios-refugios/solicitudes');
  }

  cancelarSolicitud(id: number): Observable<any> {
    const url = `http://localhost:3000/usuarios-refugios/cancelar/${id}`;
    return this.http.patch(url, {});
  }

  confirmarSolicitud(id: number): Observable<any> {
    const url = `http://localhost:3000/usuarios-refugios/confirmar/${id}`;
    return this.http.patch(url, {});
  }


}
