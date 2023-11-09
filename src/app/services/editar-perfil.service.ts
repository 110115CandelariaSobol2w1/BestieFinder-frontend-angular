import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { editarPerfil } from '../Models/perfil';

@Injectable({
  providedIn: 'root'
})
export class EditarPerfilService {

  constructor(private http:HttpClient) { }

  editarPerfil(nuevoPerfil: editarPerfil): Observable<any> {
    const dataToUpdate: { [key: string]: any } = {}; // Indicamos que dataToUpdate tendrá propiedades dinámicas

    if (nuevoPerfil.nombre) {
      dataToUpdate['nombre'] = nuevoPerfil.nombre;
    }

    if (nuevoPerfil.apellido) {
      dataToUpdate['apellido'] = nuevoPerfil.apellido;
    }

    if (nuevoPerfil.telefono) {
      dataToUpdate['telefono'] = nuevoPerfil.telefono;
    }

    if (nuevoPerfil.photo) {
      dataToUpdate['photo'] = nuevoPerfil.photo;
    }

    // Realiza la solicitud HTTP solo con los campos que se actualizarán
    return this.http.patch('http://localhost:3000/users/id', dataToUpdate);
  }
}
  
  
