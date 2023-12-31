import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http: HttpClient) { }

  crearOrdenDePago(formData: any){
    return this.http.post('http://localhost:3000/payments/create', formData)
  }

  donacionesRefugio(): Observable<any>{
    return this.http.get('http://localhost:3000/payments/refugio');
  }

  donacionesGrafico(): Observable<any> {
    return this.http.get('http://localhost:3000/payments/donaciones');
  }

  donacionesGraficoFecha(startDate: Date, endDate: Date): Observable<any> {
    const formattedStartDate = startDate.toISOString().slice(0, 10);
    const formattedEndDate = endDate.toISOString().slice(0, 10);
    
    return this.http.get(`http://localhost:3000/payments/donaciones/${formattedStartDate}/${formattedEndDate}`);
  }

  publicacionesGrafico(): Observable<any> {
    return this.http.get('http://localhost:3000/publicaciones/agrupadas');
  }

  publicacionesGraficFecha(startDate: Date, endDate: Date): Observable<any> {
    const formattedStartDate = startDate.toISOString().slice(0, 10);
    const formattedEndDate = endDate.toISOString().slice(0, 10);
    return this.http.get(`http://localhost:3000/publicaciones/agrupadas/${formattedStartDate}/${formattedEndDate}`);
  }

  publicacionesEstadoGrafico(): Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/agrupadas/estado');
  }

  publicacionesEstadoGraficoPorFecha(startDate: Date, endDate: Date): Observable<any>{
    const formattedStartDate = startDate.toISOString().slice(0, 10);
    const formattedEndDate = endDate.toISOString().slice(0, 10);
    return this.http.get(`http://localhost:3000/publicaciones/agrupadas/estado/${formattedStartDate}/${formattedEndDate}`);
  }
}
