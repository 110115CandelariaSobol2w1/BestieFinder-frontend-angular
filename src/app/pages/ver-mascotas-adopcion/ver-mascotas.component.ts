import { Component, OnInit } from '@angular/core';
import { VerMascotasService } from 'src/app/services/ver-mascotas.service';

@Component({
  selector: 'app-ver-mascotas',
  templateUrl: './ver-mascotas.component.html',
  styleUrls: ['./ver-mascotas.component.css']
})
export class VerMascotasComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private myService: VerMascotasService) { }

  ngOnInit(): void {
    this.myService.obtenerMascotasAdopcion().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

}
