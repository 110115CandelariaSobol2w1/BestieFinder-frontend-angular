import { Component, OnInit } from '@angular/core';
import { VerPerrosService } from 'src/app/services/ver-perros.service';

@Component({
  selector: 'app-ver-perros-perdidos',
  templateUrl: './ver-perros-perdidos.component.html',
  styleUrls: ['./ver-perros-perdidos.component.css']
})
export class VerPerrosPerdidosComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private myService: VerPerrosService) { }

  ngOnInit(): void {
    this.myService.obtenerPerrosPerdidos().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

}
