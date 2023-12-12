import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { DonacionesService } from 'src/app/services/donaciones.service';
Chart.register(...registerables);

interface RefugioDonaciones {
  refugio_nombre: string;
  total_donaciones: number;
}

interface Publicaciones {
  tipo_animal: string;
  total_publicaciones: number;
}

interface PublicacionesEstado {
  estado_animal: string;
  total_publicaciones: number;
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {
  refugiosDonaciones: RefugioDonaciones[] = [];
  refugiosDonaciones2: RefugioDonaciones[] = [];
  publicaciones: Publicaciones[] = [];
  publicacionesEstado: PublicacionesEstado[] = [];
  fechaInicio: Date = new Date();
  fechaFin: Date = new Date();
  myChart: Chart | null = null;

  constructor(private donacionesService: DonacionesService) {}

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonacionesFecha() {
    const fechaInicioDate = new Date(this.fechaInicio);
    const fechaFinDate = new Date(this.fechaFin);

    this.donacionesService
      .donacionesGraficoFecha(fechaInicioDate, fechaFinDate)
      .subscribe((data) => {
        this.refugiosDonaciones = data.data;
        console.log(this.refugiosDonaciones);
        this.updateChart();
      });
  }
  
  obtenerDonaciones() {
    this.donacionesService.donacionesGrafico().subscribe((data) => {
      console.log('aca llamo al metodo sin filtro');
      this.refugiosDonaciones = data.data;
      this.renderChart();
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

        const labels = this.refugiosDonaciones.map(
          (item) => item.refugio_nombre
        );
        const values = this.refugiosDonaciones.map(
          (item) => item.total_donaciones
        );

        this.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Donaciones por Refugio',
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
      const labels = this.refugiosDonaciones.map((item) => item.refugio_nombre);
      const values = this.refugiosDonaciones.map(
        (item) => item.total_donaciones
      );

      this.myChart.data.labels = labels;
      this.myChart.data.datasets[0].data = values;

      this.myChart.update(); // Actualiza el gráfico con los nuevos datos
    }
  }

  graficoPublicaciones() {
    const labels = this.publicaciones.map((item) => item.tipo_animal);
    const values = this.publicaciones.map((item) => item.total_publicaciones);

    const myChart = new Chart('publicacionesChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Publicaciones por animal',
            data: values,
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
        ],
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: false
      //     },
      //   },
      // },
    });
  }

  graficoPublicacionesEstado() {
    const labels = this.publicacionesEstado.map((item) => item.estado_animal);
    const values = this.publicacionesEstado.map(
      (item) => item.total_publicaciones
    );

    const myChart = new Chart('publicacionesEstadoChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Publicaciones por estado',
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
  }

  // obtenerPublicaciones() {
  //   this.donacionesService.publicacionesGrafico().subscribe((data) => {
  //     this.publicaciones = data.data;
  //     this.graficoPublicaciones();
  //   });
  // }

  // obtenerPublicacionesEstado() {
  //   this.donacionesService.publicacionesEstadoGrafico().subscribe((data) => {
  //     this.publicacionesEstado = data.data;
  //     this.graficoPublicacionesEstado();
  //   });
  // }
}
