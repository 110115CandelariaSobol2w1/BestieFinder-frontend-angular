import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Turno } from 'src/app/Models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css'],
})
export class TurnosComponent implements OnInit {
  form!: FormGroup;
  mascotas: any[] = [];
  centrosEsterilizacion: any[] = [];
  turnosDisponibles: any[] = [];
  fechaSeleccionada: string | null = null;

  mascotaSeleccionada: number | null = null;
  centroSeleccionado: number | null = null;

  constructor(private turnosService: TurnosService, private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
    this.form = this.formBuilder.group({
      animal_id: [''],
      refugio_id: [''],
      turno_fecha: ['']
    })
  }

  ngOnInit(): void {
    this.obtenerMisMascotas();
    this.obtenerCentros();
  }

  obtenerMisMascotas() {
    const token = localStorage.getItem('currentUser');

    if (token) {
      this.turnosService.obtenerMisMascotas().subscribe((data) => {
        console.log(data);
        this.mascotas = data.data;
      });
    } else {
      alert('Se produjo un error');
    }
  }

  obtenerCentros() {
    this.turnosService.obtenerCentrosEsterilizacion().subscribe((data) => {
      console.log(data);
      this.centrosEsterilizacion = data.data;
    });
  }

  ////////////////////////////////////////////////

  onFechaChange(event: any) {
    this.fechaSeleccionada = event.target.value;
    this.form.get('turno_fecha')?.setValue(this.fechaSeleccionada); // Asigna la fecha al formulario
    this.obtenerTurnos();
  }
  
    // Evento al seleccionar una mascota
    onMascotaSelect(event: any) {
      this.mascotaSeleccionada = event.target.value;
      this.obtenerTurnos();
    }
  
    // Evento al seleccionar un centro
    onCentroSelect(event: any) {
      this.centroSeleccionado = event.target.value;
      this.form.get('refugio_id')?.setValue(this.centroSeleccionado); // Asigna el centro al formulario
      console.log(this.form.get('refugio_id'))
      this.obtenerTurnos();
    }

        // Método para obtener turnos disponibles
    obtenerTurnos() {
      if (this.mascotaSeleccionada && this.centroSeleccionado && this.fechaSeleccionada) {
        const fechaComoDate = new Date(this.fechaSeleccionada); // Convierte a tipo Date
        this.turnosService
        .obtenerTurnosDisponibles(
        this.mascotaSeleccionada,
        fechaComoDate,
        this.centroSeleccionado
        )
        .subscribe((data) => {
        console.log(data.data);
        this.turnosDisponibles = data.data;
        });

        this.cdr.detectChanges();
      }
    }

    sacarTurno(){
      if(this.form.valid){
        let turno_fecha: Date = this.form.get('turno_fecha')?.value;
        let turno_estado: number = 1;
        let animal_id: number = this.form.get('animal_id')?.value;
        let refugio_id: number = this.form.get('refugio_id')?.value; // Utiliza un valor predeterminado si refugioSeleccionado es null
        let turno: Turno = new Turno(turno_fecha,turno_estado,animal_id,refugio_id);

        this.turnosService.createTurno(turno).subscribe({
          next: (v) => {
            alert('Turno registrado exitosamente');
            this.form.reset();
          },
          error: (e) => {
            console.error('Error al crear el turno:', e); // Imprime el error en la consola
            alert('Ups, hubo un error al registrar el turno. Revisa la consola para más detalles.');
          },
        });

      }
    }

}
