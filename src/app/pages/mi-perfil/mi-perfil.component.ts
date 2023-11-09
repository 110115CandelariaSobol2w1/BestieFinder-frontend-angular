import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiPerfilService } from 'src/app/services/mi-perfil.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
})
export class MiPerfilComponent implements OnInit {

  usuario:any;

  constructor(private miServicio: MiPerfilService, private router: Router) {}

  ngOnInit(): void {

    
    const token = localStorage.getItem('currentUser')

    if (token) {
      this.miServicio.miPerfil().subscribe(data => {
        console.log(data);
        this.usuario = data;
        console.log(this.usuario.data.nombre)
      });
    } else {
      // Maneja la falta de token, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
      this.router.navigate(['/iniciar-sesion']);
    }
  }


}
