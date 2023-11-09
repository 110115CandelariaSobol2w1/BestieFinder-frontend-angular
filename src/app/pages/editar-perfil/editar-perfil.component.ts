import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { editarPerfil } from 'src/app/Models/perfil';
import { EditarPerfilService } from 'src/app/services/editar-perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  formEditar!: FormGroup;

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

  editarPerfil() {
    const nombre: string = this.formEditar.get('nombre')?.value;
    const apellido: string = this.formEditar.get('apellido')?.value;
    const telefono: string = this.formEditar.get('telefono')?.value;
    const photo: string = this.formEditar.get('photo')?.value;
  
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
  
  
  
  
  
  
  
  


}
