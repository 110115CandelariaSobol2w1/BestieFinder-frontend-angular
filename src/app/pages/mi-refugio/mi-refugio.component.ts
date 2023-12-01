import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerRefugiosService } from 'src/app/services/ver-refugios.service';

@Component({
  selector: 'app-mi-refugio',
  templateUrl: './mi-refugio.component.html',
  styleUrls: ['./mi-refugio.component.css']
})
export class MiRefugioComponent implements OnInit {


  refugio: any;

  constructor(private myService: VerRefugiosService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('currentUser')

    if (token) {
      this.myService.obtenerRefugioPorUsuario().subscribe(data => {
        console.log(data);
        this.refugio = data;
      });
    } else {
      // Maneja la falta de token, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
      this.router.navigate(['/iniciar-sesion']);
    }
  }

}
