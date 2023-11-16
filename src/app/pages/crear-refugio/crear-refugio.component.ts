import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Refugio } from 'src/app/Models/refugio';
import { CrearRefugioService } from 'src/app/services/crear-refugio.service';

@Component({
  selector: 'app-crear-refugio',
  templateUrl: './crear-refugio.component.html',
  styleUrls: ['./crear-refugio.component.css'],
})
export class CrearRefugioComponent implements OnInit {
  form!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private miServicio: CrearRefugioService, private router: Router) {
    this.form = this.fromBuilder.group({
      nombre: [''],
      telefono: [''],
      informacion: [''],
      pais: [''],
      provincia: [''],
      ciudad: [''],
      castraciones: [''],
    });

    this.form.get('castraciones')?.valueChanges.subscribe((value) => {
      if (value === 'realiza') {
        this.form.patchValue({ castraciones: true }); // Si selecciona el primero, guardar como true
      } else if (value === 'noRealiza') {
        this.form.patchValue({ castraciones: false }); // Si selecciona el segundo, guardar como false
      }
    });
  }

  crearRefugio(){
    if(this.form.valid){
      let nombre: string = this.form.get('nombre')?.value;
      let telefono: string = this.form.get('telefono')?.value;
      let informacion: string = this.form.get('informacion')?.value;
      let pais: string = this.form.get('pais')?.value;
      let provincia: string = this.form.get('provincia')?.value;
      let ciudad: string = this.form.get('ciudad')?.value;
      let castraciones: boolean = this.form.get('castraciones')?.value;
      let refugio: Refugio = new Refugio(nombre,telefono,informacion,pais,provincia,ciudad,castraciones);

      this.miServicio.crearRefugio(refugio).subscribe({
        next: (v) => {
          this.router.navigate(['home']);
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      })

    
    }
  }

  ngOnInit(): void {}
}
