import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerRefugiosService {

  constructor(private http:HttpClient) { }

  obtenerRefugios():Observable<any>{
    return this.http.get('http://localhost:3000/refugios');
  }

  unirseRefugio(refugioId: number){

    const solicitud = {
      ref_user_rol : 'voluntario',
      refugio_id : refugioId
    };

    console.log(solicitud)

    this.http.post('http://localhost:3000/usuarios-refugios', solicitud)
  .subscribe(
    (response) => {
      console.log('Solicitud enviada con éxito:', response);
      alert('Solicitud enviada con éxito');
    },
    (error) => {
      console.error('Error al enviar la solicitud:', error);
      alert('Error al enviar la solicitud');
    }
  );

    

  }

  obtenerRefugioPorId(refugioId: number): Observable<any> {
    // Utilizamos la URL con el refugioId incluido
    const url = `http://localhost:3000/refugios/${refugioId}`;

    // Realizamos la solicitud GET con la URL específica
    return this.http.get(url);
  }

  obtenerRefugioPorUsuario():Observable<any>{
    return this.http.get('http://localhost:3000/refugios/refugio');
  }



}
