import { Injectable } from '@angular/core';

  //Importación del HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorTablaService {

  //Atributo URL
  private URL: string = 'https://laptopsdataset-default-rtdb.firebaseio.com/collection.json'

  //Inyección de dependencia del HttpClient
  constructor(private http:HttpClient) { }

  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }
}
