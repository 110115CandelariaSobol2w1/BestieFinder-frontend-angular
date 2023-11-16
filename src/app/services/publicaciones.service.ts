import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../Models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient) { }

  crearPublicacion(publicacion: Publicacion){
    return this.http.post('http://localhost:3000/publicaciones', publicacion);
  }
}
