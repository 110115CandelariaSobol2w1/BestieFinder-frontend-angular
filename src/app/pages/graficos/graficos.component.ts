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
  publicaciones: Publicaciones[] = [];
  publicacionesEstado: PublicacionesEstado[] = [];
  constructor(private donacionesService: DonacionesService) {}

  ngOnInit(): void {
    this.obtenerDonaciones();
    this.obtenerPublicaciones();
    this.obtenerPublicacionesEstado();
  }

  obtenerDonaciones() {
    this.donacionesService.donacionesGrafico().subscribe((data) => {
      this.refugiosDonaciones = data.data;
      this.renderChart();
    });
  }

  obtenerPublicaciones() {
    this.donacionesService.publicacionesGrafico().subscribe((data) => {
      this.publicaciones = data.data;
      this.graficoPublicaciones();
    });
  }

  obtenerPublicacionesEstado() {
    this.donacionesService.publicacionesEstadoGrafico().subscribe((data) => {
      this.publicacionesEstado = data.data;
      this.graficoPublicacionesEstado();
    });
  }

  renderChart() {
    const labels = this.refugiosDonaciones.map((item) => item.refugio_nombre);
    const values = this.refugiosDonaciones.map((item) => item.total_donaciones);

    const myChart = new Chart('piechart', {
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
    const values = this.publicacionesEstado.map((item) => item.total_publicaciones);

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
            beginAtZero: false
          },
        },
      },
    });
  }
}
