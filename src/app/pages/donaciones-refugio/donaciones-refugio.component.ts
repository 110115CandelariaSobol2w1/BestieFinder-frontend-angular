import { Component, OnInit } from '@angular/core';
import { DonacionesService } from 'src/app/services/donaciones.service';

@Component({
  selector: 'app-donaciones-refugio',
  templateUrl: './donaciones-refugio.component.html',
  styleUrls: ['./donaciones-refugio.component.css']
})
export class DonacionesRefugioComponent implements OnInit {

  donaciones: any[] =[];
  mostrarMensaje = false;

  constructor(private myService: DonacionesService) { }

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones(){
    this.myService.donacionesRefugio().subscribe((data) => {
      console.log(data);
      this.donaciones = data.data;
      this.mostrarMensaje = this.donaciones.length === 0;
    });
  }

}
