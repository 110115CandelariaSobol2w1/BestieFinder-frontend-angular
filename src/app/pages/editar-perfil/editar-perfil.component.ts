import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { editarPerfil } from 'src/app/Models/perfil';
import { EditarPerfilService } from 'src/app/services/editar-perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit {

  formEditar!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  
  constructor(private formBuilder: FormBuilder, private myService: EditarPerfilService,private router: Router) {
    this.formEditar = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      telefono: [''],
      photo: ['']
    })
   }

  ngOnInit(): void {
  }

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
        this.formEditar.patchValue({ photo: base64Data }); // Actualizar el valor del formulario
      }
    };

    reader.readAsDataURL(file);
  }

  editarPerfil() {
    const nombre: string = this.formEditar.get('nombre')?.value;
    const apellido: string = this.formEditar.get('apellido')?.value;
    const telefono: string = this.formEditar.get('telefono')?.value;
    let photo: string | null = this.imageUrl as string | null;
  
    if (photo === null) {
      photo = ''; // Asigna una cadena vacía o un valor por defecto en lugar de null
    }
  
    const actualizarPerfil = new editarPerfil(nombre, apellido, telefono, photo);
  
    this.myService.editarPerfil(actualizarPerfil).subscribe({
      next: (v) => {
        alert('Se actualizó correctamente');
        this.router.navigate(['perfil']);
      },
      error: (e) => {
        alert('Hubo un error al actualizar');
      },
    });
  }


    // editarPerfil() {
  //   const nombre: string = this.formEditar.get('nombre')?.value;
  //   const apellido: string = this.formEditar.get('apellido')?.value;
  //   const telefono: string = this.formEditar.get('telefono')?.value;

  //   const formData = new FormData();
  //   formData.append('nombre', nombre);
  //   formData.append('apellido', apellido);
  //   formData.append('telefono', telefono);

  //   let photo: string | null = this.imageUrl as string | null;
  //   if (photo === null) {
  //     photo = ''; // Asigna una cadena vacía o un valor por defecto en lugar de null
  //   }

  //   if (photo !== null && photo !== '') {
  //     const base64WithoutHeader = photo.split(',')[1]; // Obtener solo la parte base64 sin el encabezado
  //     formData.append('photo', base64WithoutHeader); // Agregar solo la parte base64 al formulario
  //   }

  //   this.myService.editarPerfil(formData).subscribe({
  //     next: (v) => {
  //       alert('Se actualizó correctamente');
  //       this.router.navigate(['perfil']);
  //     },
  //     error: (e) => {
  //       alert('Hubo un error al actualizar');
  //     },
  //   });
  // }
  
}
