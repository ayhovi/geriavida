import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-demenciasenil',
  templateUrl: './demenciasenil.component.html',
  styleUrls: ['./demenciasenil.component.css']
})
export class DemenciasenilComponent implements OnInit {

  Enfermedades2:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades2().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades2 =respuesta;
    });
  }

}
