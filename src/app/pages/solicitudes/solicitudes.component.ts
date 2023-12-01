import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
})
export class SolicitudesComponent implements OnInit {
  solicitudes: any[] = [];
  mostrarMensaje = false; 

  constructor(private myService: SolicitudesService) {}

  ngOnInit(): void {
    this.obtenerSolicitudesPendientes();
  }

  obtenerSolicitudesPendientes() {
    this.myService.solicitudesPendientes().subscribe((data) => {
      console.log(data);
      this.solicitudes = data.data;
      this.mostrarMensaje = this.solicitudes.length === 0;
    });
  }

  cancelarsolicitud(idUsuario: number) {
    alert("Esta por cancelar la solicitud del usuario")
    this.myService.cancelarSolicitud(idUsuario).subscribe((response) => {
      // Realizar acciones con la respuesta si es necesario
      alert("Solicitud cancelada")
      console.log(response);
      // Por ejemplo, actualiza las solicitudes después de cancelar la confirmación
      this.obtenerSolicitudesPendientes();
    });
  }

  confirmarSolicitud(idUsuario: number) {
    alert("Esta por aceptar la solciitud del usuario")
    this.myService.confirmarSolicitud(idUsuario).subscribe((response) => {
      // Realizar acciones con la respuesta si es necesario
      alert("Solicitud aceptada")
      console.log(response);
      // Por ejemplo, actualiza las solicitudes después de cancelar la confirmación
      this.obtenerSolicitudesPendientes();
    });
  }
}
