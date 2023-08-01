import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Interfaz } from 'src/interfaces/interfaz';
import { ProveedorService } from 'src/providers/proveedor.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public data: Interfaz[] = [];
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;
  public chartLabels: string[] = [];
  public chartData: any[] = [];

  constructor(private dataProvider: ProveedorService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Interfaz[];
      this.showTopRatedGamesByPrice();
    });
  }

  showTopRatedGamesByPrice() {
    this.data.forEach((item) => {
      item.price = (item.price); 
    });

    this.data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    const topRatedGames = this.data.slice(0, 10);

    this.chartLabels = topRatedGames.map((game) => game.name);
    this.chartData = topRatedGames.map((game) => game.price);

    // Render the chart on the canvas
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.renderBarChart();
  }

  renderBarChart() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;

    // Set the canvas size based on the number of data points
    canvas.width = this.chartData.length * 50; // Adjust the width based on your needs
    canvas.height = 300; // Adjust the height based on your needs

    // Calculate the maximum value in the chart data
    const maxPrice = Math.max(...this.chartData);

    // Set the scale for the y-axis
    const scaleY = canvas.height / maxPrice;

    // Bar width and spacing
    const barWidth = 30;
    const barSpacing = 10;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the bars
    ctx.fillStyle = '#01b8aa';
    for (let i = 0; i < this.chartData.length; i++) {
      const x = i * (barWidth + barSpacing);
      const barHeight = this.chartData[i] * scaleY;
      const y = canvas.height - barHeight;
      ctx.fillRect(x, y, barWidth, barHeight);
    }

    // Draw the labels on the x-axis
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    for (let i = 0; i < this.chartLabels.length; i++) {
      const x = i * (barWidth + barSpacing) + barWidth / 2;
      const y = canvas.height - 5;
      ctx.fillText(this.chartLabels[i], x, y, barWidth);
    }

    // Draw the y-axis label
    ctx.textAlign = 'right';
    ctx.fillText('Price', 40, 10);
  }
}
