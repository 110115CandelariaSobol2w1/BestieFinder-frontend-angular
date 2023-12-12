import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DonacionesService } from 'src/app/services/donaciones.service';

interface PublicacionesEstado {
  estado_animal: string;
  total_publicaciones: number;
}

@Component({
  selector: 'app-grafico-publicaciones-estado',
  templateUrl: './grafico-publicaciones-estado.component.html',
  styleUrls: ['./grafico-publicaciones-estado.component.css']
})
export class GraficoPublicacionesEstadoComponent implements OnInit {

  publicaciones: PublicacionesEstado[] = [];
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  myChart: Chart | null = null;
  
  constructor(private donacionesService: DonacionesService) { }

  ngOnInit(): void {
    this.obtenerPublicaciones()
  }

  obtenerPublicaciones() {
    this.donacionesService.publicacionesEstadoGrafico().subscribe((data) => {
      console.log('aca llamo al metodo sin filtro');
      this.publicaciones = data.data;
      console.log(this.publicaciones)
      this.renderChart();
    });
  }

  obtenerPublicacionesFecha() {
    const fechaInicioDate = new Date(this.fechaInicio);
    const fechaFinDate = new Date(this.fechaFin);

    this.donacionesService
      .publicacionesEstadoGraficoPorFecha(fechaInicioDate, fechaFinDate)
      .subscribe((data) => {
        this.publicaciones = data.data;
        console.log(this.publicaciones);
        this.updateChart();
      });
  }

  renderChart() {
    const canvas: HTMLCanvasElement | null = document.getElementById(
      'piechart'
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (this.myChart) {
          this.myChart.destroy(); // Destruye el gráfico existente si hay uno
        }

        const labels = this.publicaciones.map(
          (item) => item.estado_animal
        );
        const values = this.publicaciones.map(
          (item) => item.total_publicaciones
        );

        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Publicaciones por tipo (perdido-encontrado-adopcion)',
                data: values,
                borderWidth: 1,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: false,
              },
            },
          },
        });
      } else {
        console.error('Contexto del canvas no disponible');
      }
    } else {
      console.error('Elemento canvas no encontrado');
    }
  }

  updateChart() {
    if (!this.myChart) {
      console.log('entre al if');
      this.renderChart(); // Si no hay gráfico, renderiza uno nuevo
    } else {
      console.log('no entre al if actualizo');
      const labels = this.publicaciones.map((item) => item.estado_animal);
      const values = this.publicaciones.map(
        (item) => item.total_publicaciones
      );

      this.myChart.data.labels = labels;
      this.myChart.data.datasets[0].data = values;

      this.myChart.update(); // Actualiza el gráfico con los nuevos datos
    }
  }

}
