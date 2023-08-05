import { Component, OnInit } from '@angular/core';
import { Interfaz } from 'src/interfaces/interfaz';
import { ProveedorService } from 'src/providers/proveedor.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public data: Interfaz[] = [];
  public chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Top 10 Most Purchased Games and Ratings"
    },
    axisX: {
      title: "Game",
      interval: 1
    },
    axisY: {
      title: "Number of Ratings",
      includeZero: false
    },
    data: []
  };

  constructor(private dataProvider: ProveedorService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Interfaz[];
      this.showTopPurchasedGamesAndRatings();
    });
  }

  showTopPurchasedGamesAndRatings() {
    // Sort the data by the number of owners (assuming 'owners' is a numeric property)
    this.data.sort((a, b) => parseInt(b.owners) - parseInt(a.owners));

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

    topPurchasedGames.forEach((game) => {
      const gameName = game.name;
      const positiveRatings = parseInt(game.positive_ratings);
      const negativeRatings = parseInt(game.negative_ratings);

      positiveRatingsData.dataPoints.push({ label: gameName, y: positiveRatings });
      negativeRatingsData.dataPoints.push({ label: gameName, y: negativeRatings });
    });

    this.chartOptions.data = [positiveRatingsData, negativeRatingsData];
  }
}

