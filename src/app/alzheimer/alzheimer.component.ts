import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-alzheimer',
  templateUrl: './alzheimer.component.html',
  styleUrls: ['./alzheimer.component.css']
})
export class AlzheimerComponent implements OnInit {

  Enfermedades4:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades4().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades4 =respuesta;
    });
  }
}
