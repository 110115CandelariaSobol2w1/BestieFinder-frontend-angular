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
      console.log(email, password);

      //   this.myService.iniciarSesion(login).subscribe(
      //     (respuesta) => {
      //       Imprimir el mensaje de respuesta en la consola
      //       console.log('Respuesta de la API:', respuesta);
      //       Verificar si hay un mensaje en la respuesta
      //       if (respuesta && respuesta.message) {
      //         alert(respuesta.message); // Muestra el mensaje en un cuadro de alerta
      //       }
      //       this.router.navigate(['home']);
      //     },
      //     (error) => {
      //       Manejar el error aquí, si es necesario
      //       console.error('Error en la solicitud:', error);
      //     }
      //   );
      // } else {
      //   alert('Error en los datos');
      // }

      this.myService.iniciarSesion(login).subscribe({
        next: (v) => {
          this.router.navigate(['home']);
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      });
    }
  }
}
