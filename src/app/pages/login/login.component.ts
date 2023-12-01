import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private myService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.form.valid) {
      let email: string = this.form.get('email')?.value;
      let password: string = this.form.get('password')?.value;
      let login: Login = new Login(email, password);
  
      this.myService.iniciarSesion(login).subscribe({
        next: (v) => {
          this.myService.esPropietario().subscribe({
            next: (esPropietario) => {
              // Aquí tienes el valor de esPropietario, puedes utilizarlo según tus necesidades
              console.log('¿Es propietario?', esPropietario);
  
              // Continuar con la navegación a la página home u otra acción
              this.router.navigate(['home']);
            },
            error: (error) => {
              // Manejar el error al verificar el estado de propietario
              console.error('Error al verificar si es propietario:', error);
  
              // Continuar con la navegación a la página home u otra acción
              this.router.navigate(['home']);
            }
          });
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      });
    }
  }

  irARegistro() {
    this.router.navigate(['registro']); // 'registro' debe coincidir con la ruta definida en tu configuración de enrutamiento
  }
}
