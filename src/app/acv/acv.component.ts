import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-acv',
  templateUrl: './acv.component.html',
  styleUrls: ['./acv.component.css']
})
export class AcvComponent implements OnInit {

  Enfermedades7:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades7().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades7 =respuesta;
    });
  }

}
