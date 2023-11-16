import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerRefugiosService } from 'src/app/services/ver-refugios.service';

@Component({
  selector: 'app-unirse-refugio',
  templateUrl: './unirse-refugio.component.html',
  styleUrls: ['./unirse-refugio.component.css']
})
export class UnirseRefugioComponent implements OnInit {

  refugios: any[] = [];

  constructor(private myService: VerRefugiosService, private router: Router) { }

  ngOnInit(): void {
    this.myService.obtenerRefugios().subscribe(data => {
      console.log(data);
      this.refugios = data.data;
    })
  }

  unirseRefugio(refugioId:number){

    const token = localStorage.getItem('currentUser')

    if (token) {
      this.myService.unirseRefugio(refugioId)
    } else {
      // Maneja la falta de token, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
      this.router.navigate(['/iniciar-sesion']);
    }
    console.log('se esta llamando', refugioId)
    this.myService.unirseRefugio(refugioId);
  }

}
