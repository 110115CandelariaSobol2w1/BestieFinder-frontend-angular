import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiPerfilService } from 'src/app/services/mi-perfil.service';

@Component({
  selector: 'app-perfil-owner-mascota',
  templateUrl: './perfil-owner-mascota.component.html',
  styleUrls: ['./perfil-owner-mascota.component.css'],
})
export class PerfilOwnerMascotaComponent implements OnInit {
  usuario: any;
  constructor(private myService: MiPerfilService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const idUsuario = +params['idUsuario']; // Convierte el parámetro de string a número si es necesario
      this.obtenerPerfilDueño(idUsuario);
    });
  }

  obtenerPerfilDueño(idUsuario: number) {
    this.myService.obtenerPerfilDueño(idUsuario).subscribe((data) => {
      console.log(data);
      this.usuario = data.data;
    });
  }
}
