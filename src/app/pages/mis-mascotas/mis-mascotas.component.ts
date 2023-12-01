import { Component, OnInit } from '@angular/core';
import { VerMascotasService } from 'src/app/services/ver-mascotas.service';
import { VerPerrosService } from 'src/app/services/ver-perros.service';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.css'],
})

export class MisMascotasComponent implements OnInit {

  mascotas: any[] = [];
  mostrarMensaje = false;

  constructor(private myService: VerMascotasService) {}

  ngOnInit(): void {
    
    const token = localStorage.getItem('currentUser');

    if (token) {
      this.myService.obtenerMisMascotas().subscribe((data) => {
        console.log(data);
        this.mascotas = data.data;
      });
      this.mostrarMensaje = this.mascotas.length === 0;
    } else {
      alert('Se produjo un error')
    }
  }
}
