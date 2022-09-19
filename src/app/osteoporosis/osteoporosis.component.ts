import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-osteoporosis',
  templateUrl: './osteoporosis.component.html',
  styleUrls: ['./osteoporosis.component.css']
})
export class OsteoporosisComponent implements OnInit {

  Enfermedades10:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades10().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades10 =respuesta;
    });
  }

}
