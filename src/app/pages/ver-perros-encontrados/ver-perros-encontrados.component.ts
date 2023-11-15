import { Component, OnInit } from '@angular/core';
import { VerPerrosService } from 'src/app/services/ver-perros.service';

@Component({
  selector: 'app-ver-perros-encontrados',
  templateUrl: './ver-perros-encontrados.component.html',
  styleUrls: ['./ver-perros-encontrados.component.css']
})
export class VerPerrosEncontradosComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private myService: VerPerrosService) { }

  ngOnInit(): void {
    this.myService.obtenerPerrosEncontrados().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

}
