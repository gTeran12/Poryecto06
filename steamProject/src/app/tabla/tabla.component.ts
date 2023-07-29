import { Component } from '@angular/core';
import { ProveedorService } from 'src/providers/proveedor.service';
import { Interfaz } from 'src/interfaces/interfaz';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  public data: Interfaz[] = [];
  selectedOption: string = 'showMostRated'; // Default selected option
  constructor(private dataProvider: ProveedorService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as Interfaz[];
      this.onOptionChange(); // Call the function based on the default selected option.
    });
  }

  onOptionChange() {
    if (this.selectedOption === 'showMostRated') {
      this.showMostRated();
    } else if (this.selectedOption === 'showMostPlayed') {
      this.showMostPlayed();
    }
  }

  showMostRated() {
    // Ensure that 'valoracion' is of numeric type in the 'Interfaz' interface.
    // For example, if 'valoracion' is a string, you can convert it to a number using 'parseInt' or 'parseFloat'.
    this.data.forEach((item) => {
      item.positive_ratings = (item.positive_ratings); // Replace 'parseInt' with 'parseFloat' if 'positive_ratings' is a floating-point number.
    });

    // Now the 'positive_ratings' property is treated as a number, and the sorting should work correctly.
    this.data.sort((a, b) => parseInt(b.positive_ratings) - parseInt(a.positive_ratings));

    // Obtiene los 10 primeros elementos después de ordenarlos.
    this.data = this.data.slice(0, 10);
  }

  showMostPlayed() {
    this.data.forEach((item) => {
      item.median_playtime = (item.median_playtime); // Parse as floating-point number if 'median_playtime' is a decimal value.
    });

    this.data.sort((a, b) => parseInt(b.median_playtime) - parseInt(a.median_playtime));
    this.data = this.data.slice(0, 10);
  }
}
