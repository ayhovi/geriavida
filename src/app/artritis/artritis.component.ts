import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-artritis',
  templateUrl: './artritis.component.html',
  styleUrls: ['./artritis.component.css']
})
export class ArtritisComponent implements OnInit {

  Enfermedades9:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades9().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades9 =respuesta;
    });
  }

}

