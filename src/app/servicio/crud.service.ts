import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string="http://localhost/apiGeriavida/galeria.php";

API2: string="http://localhost/apigeriavida/enfermedades.php/?consultar=1";
constructor(private clienteHttp:HttpClient) { }

  ObtenerGaleria(){
    return this.clienteHttp.get(this.API);
  }
  ObtenerEnfermedades(){
    return this.clienteHttp.get(this.API2);
  }
}