import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerRefugiosService } from 'src/app/services/ver-refugios.service';

@Component({
  selector: 'app-ver-refugio',
  templateUrl: './ver-refugio.component.html',
  styleUrls: ['./ver-refugio.component.css']
})
export class VerRefugioComponent implements OnInit {

  refugio: any;
  refugioId: number | undefined;

  constructor(private myService: VerRefugiosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.refugioId = +params['id']; // Obtener el 'id' de los parámetros de la URL
      this.obtenerRefugio(); // Llamar a la función para obtener el refugio
    });
  }

  obtenerRefugio(): void {
    if (this.refugioId) {
      this.myService.obtenerRefugioPorId(this.refugioId).subscribe(
        (data) => {
          console.log('Detalles del refugio:', data);
          this.refugio = data;
        },
        (error) => {
          console.error('Error al obtener detalles del refugio:', error);
          // Maneja el error aquí, por ejemplo, mostrando un mensaje al usuario
        }
      );
    }
  }



}
