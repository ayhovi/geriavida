import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-diabetesmellitus',
  templateUrl: './diabetesmellitus.component.html',
  styleUrls: ['./diabetesmellitus.component.css']
})
export class DiabetesmellitusComponent implements OnInit {

  Enfermedades5:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades5().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades5 =respuesta;
    });
  }

}
