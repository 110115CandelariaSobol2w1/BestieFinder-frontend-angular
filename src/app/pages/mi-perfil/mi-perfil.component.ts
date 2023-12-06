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
  perteneceARefugio: boolean | undefined;
  datosUsuarioYRefugio: any;

  constructor(private miServicio: MiPerfilService, private router: Router) {}

  ngOnInit(): void {

    
    const token = localStorage.getItem('currentUser')

    if (token) {
      this.miServicio.miPerfil().subscribe(data => {
        console.log(data);
        this.usuario = data;
        console.log(this.usuario.data)

        this.obtenerUsuarioVoluntario();
        this.obtenerRefugioUsuario();
      });
    } else {
      // Maneja la falta de token, por ejemplo, redirigiendo al usuario a la página de inicio de sesión
      this.router.navigate(['/iniciar-sesion']);
    }
  }

  obtenerUsuarioVoluntario() {
    this.miServicio.usuarioVoluntario().subscribe(response => {
      console.log(response);
      this.perteneceARefugio = response; // Asigna el valor de respuesta a la variable perteneceARefugio
    });
  }

  obtenerRefugioUsuario(){
    this.miServicio.usuarioRefugio().subscribe(response => {
      console.log(response);
      this.datosUsuarioYRefugio = response;
    })
  }

}
