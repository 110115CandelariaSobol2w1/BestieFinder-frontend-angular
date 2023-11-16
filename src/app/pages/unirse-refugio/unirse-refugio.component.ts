import { Component, OnInit } from '@angular/core';
import { VerRefugiosService } from 'src/app/services/ver-refugios.service';

@Component({
  selector: 'app-unirse-refugio',
  templateUrl: './unirse-refugio.component.html',
  styleUrls: ['./unirse-refugio.component.css']
})
export class UnirseRefugioComponent implements OnInit {

  refugios: any[] = [];

  constructor(private myService: VerRefugiosService) { }

  ngOnInit(): void {
    this.myService.obtenerRefugios().subscribe(data => {
      console.log(data);
      this.refugios = data.data;
    })
  }

}
