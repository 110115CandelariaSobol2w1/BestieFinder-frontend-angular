import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Evento } from 'src/app/Models/eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private miServicio: EventosService) { 
    this.form = this.formBuilder.group({
      evento_nombre: [''],
      evento_descripcion: [''],
      evento_inicio: [''],
      evento_fin: [''],
      evento_ubicacion: [''],
      evento_ciudad: [''],
      evento_photo: [''],
      refugio_id: ['']
    });
  }

  crearEvento(){
    if(this.form.valid){
      let evento_nombre: string = this.form.get('evento_nombre')?.value;
      let evento_descripcion: string = this.form.get('evento_descripcion')?.value;
      let evento_inicio: Date = this.form.get('evento_inicio')?.value;
      let evento_fin: Date = this.form.get('evento_fin')?.value;
      let evento_ubicacion: string = this.form.get('evento_ubicacion')?.value;
      let evento_ciudad: string = this.form.get('evento_ciudad')?.value;
      let evento_photo: string = this.form.get('evento_photo')?.value;
      let refugio_id: number = this.form.get('refugio_id')?.value;
      let evento: Evento = new Evento(evento_nombre,evento_descripcion,evento_inicio,evento_fin,evento_ubicacion,evento_ciudad,evento_photo,refugio_id);

      this.miServicio.crearEvento(evento).subscribe({
        next: (v) => {
          alert('Evento creado correctamente')
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
