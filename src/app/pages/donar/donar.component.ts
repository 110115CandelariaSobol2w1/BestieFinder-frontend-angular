import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonacionesService } from 'src/app/services/donaciones.service';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {

  form!: FormGroup;
  refugios: any[] = [];

  constructor(private turnosService: TurnosService, private donacionesService: DonacionesService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      refugio: [''],
      monto: ['']
    })
   }

  ngOnInit(): void {
    this.obtenerRefugios();
  }

  obtenerRefugios() {
    this.turnosService.obtenerCentrosEsterilizacion().subscribe((data) => {
      console.log(data);
      this.refugios = data.data;
    });
  }

  onRefugioSelected(event: Event) {
    const selectedRefugioId = (event.target as HTMLSelectElement).value;
    console.log('ID del refugio seleccionado:', selectedRefugioId);
    // Puedes hacer lo que necesites con el ID seleccionado aquí, como asignarlo a una variable en tu formulario.
  }

  pagar() {

    const formData = this.form.value;
    this.donacionesService.crearOrdenDePago(formData).subscribe((response: any) => {
      // Redirige al usuario a la URL de Mercado Pago obtenida del backend
      console.log(response);
      console.log(response.response)
      window.location.href = response.body.init_point;
    });
  }
  
  

}
