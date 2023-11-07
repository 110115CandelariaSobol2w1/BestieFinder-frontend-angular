import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/Models/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formRegistro!: FormGroup;

  constructor(
    private myService: RegistroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    
  }

  ngOnInit(): void {}

  registro() {
    if (this.formRegistro.valid) {
      let nombre: string = this.formRegistro.get('nombre')?.value;
      let apellido: string = this.formRegistro.get('apellido')?.value;
      let email: string = this.formRegistro.get('email')?.value;
      let password: string = this.formRegistro.get('password')?.value;
      let registroDatos: Registro = new Registro(
        nombre,
        apellido,
        email,
        password
      );

      this.myService.signup(registroDatos).subscribe({
        next: (v) => {
          alert('Se registro correctamente');
          this.router.navigate(['iniciar-sesion']);
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      });
    }
  }
}
