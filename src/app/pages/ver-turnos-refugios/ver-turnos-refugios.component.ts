import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-ver-turnos-refugios',
  templateUrl: './ver-turnos-refugios.component.html',
  styleUrls: ['./ver-turnos-refugios.component.css']
})
export class VerTurnosRefugiosComponent implements OnInit {

  turnos: any[] =[];

  constructor(private myService: TurnosService) { }

  ngOnInit(): void {
    this.myService.obtenerTurnosRefugio().subscribe(data => {
      console.log(data);
      this.turnos = data.data;
    })
  }

}
