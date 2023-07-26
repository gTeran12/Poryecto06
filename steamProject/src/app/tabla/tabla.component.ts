import { Component } from '@angular/core';

import { Tabla } from '../interfaces/tabla';

import { ProveedorTablaService } from '../providers/proveedor-tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  constructor(private dataProvider: ProveedorTablaService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Tabla[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Tabla[]);
    })
  }



}
