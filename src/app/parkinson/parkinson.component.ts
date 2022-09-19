import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-parkinson',
  templateUrl: './parkinson.component.html',
  styleUrls: ['./parkinson.component.css']
})
export class ParkinsonComponent implements OnInit {

  Enfermedades3:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades3().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades3 =respuesta;
    });
  }

}
