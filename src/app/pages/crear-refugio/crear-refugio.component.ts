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
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private fromBuilder: FormBuilder, private miServicio: CrearRefugioService, private router: Router) {
    this.form = this.fromBuilder.group({
      nombre: [''],
      pais: [''],
      provincia: [''],
      ciudad: [''],
      telefono: [''],
      informacion: [''],
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

  
  ngOnInit(): void {}

  selectFile(): void {
    const fileInput = document.getElementById('inputFile');
    fileInput?.click(); // Simula un clic en el input de tipo archivo
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      this.convertToBase64(file);
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Data = reader.result?.toString().split(',')[1];
      console.log(base64Data) // Obtener la cadena base64 después de la coma

      if (base64Data) {
        this.imageUrl = reader.result; // Actualizar la imagen para mostrarla en la interfaz
        this.form.patchValue({ photo: base64Data }); // Actualizar el valor del formulario
      }
    };

    reader.readAsDataURL(file);
  }

  crearRefugio(){
    if(this.form.valid){
      let nombre: string = this.form.get('nombre')?.value;
      let pais: string = this.form.get('pais')?.value;
      let provincia: string = this.form.get('provincia')?.value;
      let ciudad: string = this.form.get('ciudad')?.value;
      let telefono: string = this.form.get('telefono')?.value;
      let informacion: string = this.form.get('informacion')?.value;
      let castraciones: boolean = this.form.get('castraciones')?.value;
      let userRole: string = 'owner';
      let photo: string | null = this.imageUrl as string | null;
      if (photo === null) {
        photo = ''; // Asigna una cadena vacía o un valor por defecto en lugar de null
      }
      let refugio: Refugio = new Refugio(nombre,pais,provincia,ciudad,telefono,informacion,castraciones,userRole, photo);

      this.miServicio.crearRefugio(refugio).subscribe({
        next: (v) => {
          alert('Refugio registrado correctamente')
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      })

    
    }
  }
}
