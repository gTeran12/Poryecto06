import { Component } from '@angular/core';
//Importación de la interfaz
import { Interfaz } from 'src/interfaces/interfaz';

//Importación del servicio
import { ProveedorService } from 'src/providers/proveedor.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  //Atributo con el tipo de dato de la interfaz
  public data : Interfaz[] = [];
  constructor(private dataProvider: ProveedorService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Interfaz[]);
    })
  }
}
