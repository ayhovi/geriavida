import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-hipertensionarterial',
  templateUrl: './hipertensionarterial.component.html',
  styleUrls: ['./hipertensionarterial.component.css']
})
export class HipertensionarterialComponent implements OnInit {

  Enfermedades6:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades6().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades6 =respuesta;
    });
  }

}
