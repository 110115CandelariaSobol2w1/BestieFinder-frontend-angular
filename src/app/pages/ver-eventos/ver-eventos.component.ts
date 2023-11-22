import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-ver-eventos',
  templateUrl: './ver-eventos.component.html',
  styleUrls: ['./ver-eventos.component.css']
})
export class VerEventosComponent implements OnInit {

  eventos: any[] = [];

  constructor(private myService: EventosService) { }

  ngOnInit(): void {
    this,this.myService.obtenerEventos().subscribe(data => {
      console.log(data);
      this.eventos = data.data
    })
  }

}
