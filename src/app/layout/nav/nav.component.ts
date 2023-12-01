import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  esPropietarioRefugio: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.estaLogueado();
    this.authService.esPropietario().subscribe((esPropietario: boolean) => {
      this.esPropietarioRefugio = esPropietario;
    });
  }

  estaLogueado() {
    return this.authService.estaAutenticado;
  }

  logout() {
    return this.authService.logout();
  }

}
