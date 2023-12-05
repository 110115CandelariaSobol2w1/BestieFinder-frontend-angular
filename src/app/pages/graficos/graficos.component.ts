import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { DonacionesService } from 'src/app/services/donaciones.service';
Chart.register(...registerables);


interface RefugioDonaciones {
  refugio_nombre: string;
  total_donaciones: number;
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {


  refugiosDonaciones: RefugioDonaciones[] = [];
  constructor(private donacionesService: DonacionesService) {}

  ngOnInit(): void {
    this.obtenerDonaciones();
  }

  obtenerDonaciones(){
    this.donacionesService.donacionesGrafico().subscribe((data) => {
      console.log(data);
      this.refugiosDonaciones = data.data;
      this.renderChart();
    });

  }

  renderChart() {
    const labels = this.refugiosDonaciones.map(item => item.refugio_nombre);
    const values = this.refugiosDonaciones.map(item => item.total_donaciones);

    const myChart = new Chart('piechart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Donaciones por Refugio',
          data: values,
          borderWidth: 1,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
  
