import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {

  turnos: any[] = [];

  constructor(private myService: TurnosService) {

   }

  ngOnInit(): void {
    this.myService.obtenerMisTurnos().subscribe(data => {
      console.log(data);
      this.turnos = data.data;
    })
  }

}
