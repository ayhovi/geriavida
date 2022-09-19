import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-artrosis',
  templateUrl: './artrosis.component.html',
  styleUrls: ['./artrosis.component.css']
})
export class ArtrosisComponent implements OnInit {

  Enfermedades8:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEnfermedades8().subscribe(respuesta=>{
      console.log( respuesta );
      this.Enfermedades8 =respuesta;
    });
  }

}

