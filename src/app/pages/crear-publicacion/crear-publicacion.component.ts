import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Publicacion } from 'src/app/Models/publicacion';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {

  form!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private fromBuilder: FormBuilder, private miServicio: PublicacionesService) {
    this.form = this.fromBuilder.group({
      animal_name: [''],
      animal_raza: [''],
      animal_edad: [''],
      animal_color: [''],
      animal_sexo: [''],
      animal_descripcion: [''],
      animal_photo: [''],
      animal_personalidad: [''],
      animal_patio: [''],
      animal_estado: [''],
      animal_tipo: [''],
      publicacion_descripcion: [''],
      publicacion_ubicacion: [''],
      publicacion_fecha: [''],
      //publicacion_photo: ['']
    });

    this.form.get('animal_sexo')?.valueChanges.subscribe((value) => {
      if (value === 'macho') {
        this.form.patchValue({ animal_sexo: 'macho' }); // Si selecciona el primero, guardar como true
      } else if (value === 'hembra') {
        this.form.patchValue({ animal_sexo: 'hembra' }); 
      }
    });

    this.form.get('animal_patio')?.valueChanges.subscribe((value) => {
      if (value === 'si') {
        this.form.patchValue({ animal_patio: true });
      } else if (value === 'no') {
        this.form.patchValue({ animal_patio: false }); 
      }
    });

    this.form.get('animal_estado')?.valueChanges.subscribe((value) => {
      if (value === 'perdido') {
        this.form.patchValue({ animal_estado: 1 }); 
      } else if (value === 'encontrado') {
        this.form.patchValue({ animal_estado: 2 }); 
      } else if (value === 'adopcion') {
        this.form.patchValue({ animal_estado: 4 });
      }
    });

    this.form.get('animal_tipo')?.valueChanges.subscribe((value) => {
      if (value === 'perro') {
        this.form.patchValue({ animal_tipo: 1 }); 
      } else if (value === 'gato') {
        this.form.patchValue({ animal_tipo: 2 }); 
      } else if (value === 'ave') {
        this.form.patchValue({ animal_tipo: 3 }); 
      } else if (value === 'otro') {
        this.form.patchValue({ animal_tipo: 4 }); 
      }
    });
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
        this.form.patchValue({ photo: base64Data }); // Actualizar el valor del formulario
      }
    };

    reader.readAsDataURL(file);
  }

   crearPublicacion(){
    if(this.form.valid){
      let animal_name: string = this.form.get('animal_name')?.value;
      let animal_raza: string = this.form.get('animal_raza')?.value;
      let animal_edad: number = this.form.get('animal_edad')?.value;
      let animal_color: string = this.form.get('animal_color')?.value;
      let animal_sexo: string = this.form.get('animal_sexo')?.value;
      let animal_descripcion: string = this.form.get('animal_descripcion')?.value;
      let animal_photo: string | null = this.imageUrl as string | null;
      let animal_personalidad: string = this.form.get('animal_personalidad')?.value;
      let animal_patio: string = this.form.get('animal_patio')?.value;
      let animal_estado: number = this.form.get('animal_estado')?.value;
      let animal_tipo: number = this.form.get('animal_tipo')?.value;
      let publicacion_descripcion: string = this.form.get('publicacion_descripcion')?.value;
      let publicacion_ubicacion: string = this.form.get('publicacion_ubicacion')?.value;
      let publicacion_fecha: Date = this.form.get('publicacion_fecha')?.value;
      let publicacion_photo: string | null = animal_photo;
      if (animal_photo === null) {
        animal_photo = ''; // Asigna una cadena vacía o un valor por defecto en lugar de null
      }
      if (publicacion_photo === null) {
        publicacion_photo = ''; // Asigna una cadena vacía o un valor por defecto en lugar de null
      }
      let publicacion: Publicacion = new Publicacion(animal_name,animal_raza,animal_edad,animal_color,animal_sexo,animal_descripcion,animal_photo,animal_personalidad,animal_patio,animal_estado,animal_tipo,publicacion_descripcion,publicacion_ubicacion,publicacion_fecha,publicacion_photo);

      this.miServicio.crearPublicacion(publicacion).subscribe({
        next: (v) => {
          alert('Publicacion creada correctamente')
        },
        error: (e) => {
          alert('ups hubo un error');
        },
      })
    }
   }

  ngOnInit(): void {
  }

}
