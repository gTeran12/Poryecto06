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
  public chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Top 10 Most Expensive and Ratings"
    },
    axisX: {
      title: "Game",
      interval: 1
    },
    axisY: {
      title: "Price",
      includeZero: false
    },
    data: []
  };

  constructor(private dataProvider: ProveedorService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Interfaz[];
      this.showTopExpensive();
    });
  }

  showTopExpensive() {
    // Sort the data by the price)
    this.data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    // Get the top 10 most purchased games
    const topPurchasedGames = this.data.slice(0, 10);

    // Prepare data points for positive ratings and negative ratings
    const positiveRatingsData = {
      type: "line",
      showInLegend: true,
      name: "Positive Ratings",
      dataPoints: []
    };

    const negativeRatingsData = {
      type: "line",
      showInLegend: true,
      name: "Negative Ratings",
      dataPoints: []
    };

    const prices = {
      type: "column",
      showInLegend: true,
      name: "Price",
      dataPoints: []
    };

    topPurchasedGames.forEach((game) => {
      const gameName = game.name;
      const positiveRatings = parseInt(game.positive_ratings);
      const negativeRatings = parseInt(game.negative_ratings);
      const price = parseFloat(game.price);

      positiveRatingsData.dataPoints.push({ label: gameName, y: positiveRatings });
      negativeRatingsData.dataPoints.push({ label: gameName, y: negativeRatings });
      prices.dataPoints.push({ label: gameName, y: price });

    });

    this.chartOptions.data = [prices, positiveRatingsData, negativeRatingsData];
  }

}
