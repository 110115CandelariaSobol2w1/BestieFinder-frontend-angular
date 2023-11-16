import { Component, OnInit } from '@angular/core';
import { VerRefugiosService } from 'src/app/services/ver-refugios.service';

@Component({
  selector: 'app-ver-refugio',
  templateUrl: './ver-refugio.component.html',
  styleUrls: ['./ver-refugio.component.css']
})
export class VerRefugioComponent implements OnInit {

  refugio: any;
  refugioId: number = 1;

  constructor(private myService: VerRefugiosService) { }

  ngOnInit(): void {
    if (this.refugioId) {
      this.myService.obtenerRefugioPorId(this.refugioId).subscribe(data => {
        console.log(data);
        this.refugio = data;
      });
    }
  }

}
