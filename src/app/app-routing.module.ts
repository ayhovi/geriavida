import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropositoComponent } from './proposito/proposito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GeriavidaComponent } from './geriavida/geriavida.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ProtocolosComponent } from './protocolos/protocolos.component';
import { VisitasComponent } from './visitas/visitas.component';
import { HomeComponent } from './home/home.component';
import { DemenciasenilComponent } from './demenciasenil/demenciasenil.component';
import { ParkinsonComponent } from './parkinson/parkinson.component';
import { AlzheimerComponent } from './alzheimer/alzheimer.component';
import { DiabetesmellitusComponent } from './diabetesmellitus/diabetesmellitus.component';
import { HipertensionarterialComponent } from './hipertensionarterial/hipertensionarterial.component';
import { AcvComponent } from './acv/acv.component';
import { ArtrosisComponent } from './artrosis/artrosis.component';
import { ArtritisComponent } from './artritis/artritis.component';
import { OsteoporosisComponent } from './osteoporosis/osteoporosis.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';

const routes: Routes = [
  {path: 'proposito', component:PropositoComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'geriavida', component:GeriavidaComponent},
  {path: 'seguridad', component:SeguridadComponent},
  {path: 'protocolos', component:ProtocolosComponent},
  {path: 'visitas', component:VisitasComponent},
  {path: '', component:HomeComponent},
  {path: 'demenciasenil', component:DemenciasenilComponent},
  {path: 'parkinson', component:ParkinsonComponent},
  {path: 'alzheimer', component:AlzheimerComponent},
  {path: 'diabetesmellitus', component:DiabetesmellitusComponent},
  {path: 'hipertensionarterial', component:HipertensionarterialComponent},
  {path: 'acv', component:AcvComponent},
  {path: 'artrosis', component:ArtrosisComponent},
  {path: 'artritis', component:ArtritisComponent},
  {path: 'osteoporosis', component:OsteoporosisComponent},
  {path: 'enfermedades', component:EnfermedadesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
