import { Component, OnInit } from '@angular/core';
import { VerMascotasService } from 'src/app/services/ver-mascotas.service';

@Component({
  selector: 'app-ver-mascotas',
  templateUrl: './ver-mascotas.component.html',
  styleUrls: ['./ver-mascotas.component.css']
})
export class VerMascotasComponent implements OnInit {

  mascotas: any[] = [];
  filtroSeleccionado: string | undefined;

  constructor(private myService: VerMascotasService) { }

  ngOnInit(): void {
    this.obtenerMascotas()
  }

  aplicarFiltro(filtro: string): void {
    this.filtroSeleccionado = filtro;

    // Dependiendo del filtro seleccionado, llama al servicio correspondiente
    switch (filtro) {
      case 'perro':
        this.myService.obtenerPerrosAdopcion().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      case 'gato':
        this.myService.obtenerGatosAdopcion().subscribe((data) => {
          console.log(data);
          this.mascotas = data.data;
        });
        break;
      default:
        // Si no se selecciona un filtro válido, obtener todas las mascotas
        this.myService.obtenerMascotasAdopcion();
        break;
    }
  }

  obtenerMascotas(){
    this.myService.obtenerMascotasAdopcion().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

  // obtenerPerfilDueño(id: number){
  //   this.myService.obtenerPerfilDueño(id).subscribe(data => {
  //     console.log(data);
  //     this.mascotas = data.data
  //   })
  // }

}
