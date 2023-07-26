import { Component } from '@angular/core';
<<<<<<< HEAD

import { Tabla } from '../interfaces/tabla';

import { ProveedorTablaService } from '../providers/proveedor-tabla.service';
=======
//Importación de la interfaz
import { Interfaz } from 'src/interfaces/interfaz';

//Importación del servicio
import { ProveedorService } from 'src/providers/proveedor.service';
>>>>>>> 14fd8927507ffe89eac58f6ad1477a713f3a67a1

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
<<<<<<< HEAD
  constructor(private dataProvider: ProveedorTablaService) { }

  //Atributo con el tipo de dato de la interfaz
  public data : Tabla[] = [];

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Tabla[]);
    })
  }



=======
  //Atributo con el tipo de dato de la interfaz
  public data : Interfaz[] = [];
  constructor(private dataProvider: ProveedorService) { }
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Interfaz[]); 
    })
  }
>>>>>>> 14fd8927507ffe89eac58f6ad1477a713f3a67a1
}
