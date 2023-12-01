import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerMascotasService {

  constructor(private http:HttpClient) { }

  obtenerMascotasAdopcion():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/byEstado/4');
  }

  obtenerMisMascotas(): Observable<any>{
    return this.http.get('http://localhost:3000/animales/misMascotas');
  }

  obtenerMascotasPerdidas():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/byEstado/1');
  }

  obtenerMascotasEncontradas():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/byEstado/2');
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

  obtenerGatosAdopcion():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/adopcion/gatos');
  }

  obtenerGatosPerdidos():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/perdidos/gatos');
  }

  obtenerGatosEncontrados():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/encontrados/gatos');
  }

  obtenerAvesEncontradas():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/encontrados/aves');
  }

  obtenerAvesPerdidas():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/perdidos/aves');
  }

  obtenerAvesAdopcion():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/adopcion/aves');
  }

  obtenerOtrosEncontrados():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/encontrados/otros');
  }

  obtenerOtrosPerdidos():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/perdidos/otros');
  }

  obtenerOtrosAdopcion():Observable<any>{
    return this.http.get('http://localhost:3000/publicaciones/adopcion/otros');
  }

  


}
