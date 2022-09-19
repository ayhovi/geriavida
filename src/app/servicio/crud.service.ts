import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string="http://localhost/apiGeriavida/galeria.php";

API2: string="http://localhost/apigeriavida/enfermedades.php/?consultar=1";

API3: string="http://localhost/apigeriavida/enfermedades.php/?consultar=10";
API4: string="http://localhost/apigeriavida/enfermedades.php/?consultar=11";
API5: string="http://localhost/apigeriavida/enfermedades.php/?consultar=12";
API6: string="http://localhost/apigeriavida/enfermedades.php/?consultar=13";
API7: string="http://localhost/apigeriavida/enfermedades.php/?consultar=14";
API8: string="http://localhost/apigeriavida/enfermedades.php/?consultar=15";
API9: string="http://localhost/apigeriavida/enfermedades.php/?consultar=16";
API10: string="http://localhost/apigeriavida/enfermedades.php/?consultar=17";
API11: string="http://localhost/apigeriavida/enfermedades.php/?consultar=18";
API12: string="http://localhost/apigeriavida/enfermedades.php/?consultar=19";


constructor(private clienteHttp:HttpClient) { }

  ObtenerGaleria(){
    return this.clienteHttp.get(this.API);
  }

  ObtenerEnfermedades(){
    return this.clienteHttp.get(this.API2);
  }

  ObtenerEnfermedades2(){
    return this.clienteHttp.get(this.API3);
  }

  ObtenerEnfermedades3(){
    return this.clienteHttp.get(this.API4);
  }
  ObtenerEnfermedades4(){
    return this.clienteHttp.get(this.API5);
  }
  ObtenerEnfermedades5(){
    return this.clienteHttp.get(this.API6);
  }
  ObtenerEnfermedades6(){
    return this.clienteHttp.get(this.API7);
  }
  ObtenerEnfermedades7(){
    return this.clienteHttp.get(this.API8);
  }
  ObtenerEnfermedades8(){
    return this.clienteHttp.get(this.API9);
  }
  ObtenerEnfermedades9(){
    return this.clienteHttp.get(this.API10);
  }
  ObtenerEnfermedades10(){
    return this.clienteHttp.get(this.API11);
  }
  ObtenerEnfermedades11(){
    return this.clienteHttp.get(this.API12);
  }

}
