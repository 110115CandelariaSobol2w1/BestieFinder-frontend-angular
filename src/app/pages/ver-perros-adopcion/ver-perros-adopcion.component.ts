import { Component, OnInit } from '@angular/core';
import { VerPerrosService } from 'src/app/services/ver-perros.service';

@Component({
  selector: 'app-ver-perros-adopcion',
  templateUrl: './ver-perros-adopcion.component.html',
  styleUrls: ['./ver-perros-adopcion.component.css']
})
export class VerPerrosAdopcionComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private myService: VerPerrosService) { }

  ngOnInit(): void {
    this.myService.obtenerPerrosAdopcion().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

}
