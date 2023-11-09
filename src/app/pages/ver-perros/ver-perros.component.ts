import { Component, OnInit } from '@angular/core';
import { VerPerrosService } from 'src/app/services/ver-perros.service';

@Component({
  selector: 'app-ver-perros',
  templateUrl: './ver-perros.component.html',
  styleUrls: ['./ver-perros.component.css']
})
export class VerPerrosComponent implements OnInit {

  mascotas: any[] = [];

  constructor(private myService: VerPerrosService) { }

  ngOnInit(): void {
    this.myService.obtenerPerros().subscribe(data => {
      console.log(data);
      this.mascotas = data.data;
    })
  }

}
