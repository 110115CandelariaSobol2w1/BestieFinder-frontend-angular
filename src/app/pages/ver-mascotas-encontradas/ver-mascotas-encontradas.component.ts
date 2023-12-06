import { Component, OnInit } from '@angular/core';
import { VerMascotasService } from 'src/app/services/ver-mascotas.service';

@Component({
  selector: 'app-ver-mascotas-encontradas',
  templateUrl: './ver-mascotas-encontradas.component.html',
  styleUrls: ['./ver-mascotas-encontradas.component.css'],
})
export class VerMascotasEncontradasComponent implements OnInit {
  mascotas: any[] = [];
  filtroSeleccionado: string | undefined;

  constructor(private myService: VerMascotasService) {}

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  aplicarFiltro(filtro: string): void {
    this.filtroSeleccionado = filtro;

    // Dependiendo del filtro seleccionado, llama al servicio correspondiente
    switch (filtro) {
      case 'perro':
        this.myService.obtenerPerrosEncontrados().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      case 'gato':
        this.myService.obtenerGatosEncontrados().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      case 'aves':
        this.myService.obtenerAvesEncontradas().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      case 'otros':
        this.myService.obtenerOtrosEncontrados().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      default:
        // Si no se selecciona un filtro válido, obtener todas las mascotas
        this.myService.obtenerMascotasEncontradas();
        break;
    }
  }

  obtenerMascotas() {
    this.myService.obtenerMascotasEncontradas().subscribe((data) => {
      console.log(data);
      this.mascotas = data.data;
    });
  }
}
