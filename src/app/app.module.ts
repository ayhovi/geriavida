import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PropositoComponent } from './proposito/proposito.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GeriavidaComponent } from './geriavida/geriavida.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { ProtocolosComponent } from './protocolos/protocolos.component';
import { VisitasComponent } from './visitas/visitas.component';
import { HomeComponent } from './home/home.component';
import { EnfermedadesComponent } from './enfermedades/enfermedades.component';
import { ParkinsonComponent } from './parkinson/parkinson.component';
import { AcvComponent } from './acv/acv.component';
import { ArtrosisComponent } from './artrosis/artrosis.component';
import { ArtritisComponent } from './artritis/artritis.component';
import { OsteoporosisComponent } from './osteoporosis/osteoporosis.component';
import { HipertensionarterialComponent } from './hipertensionarterial/hipertensionarterial.component';
import { DiabetesmellitusComponent } from './diabetesmellitus/diabetesmellitus.component';
import { DemenciasenilComponent } from './demenciasenil/demenciasenil.component';
import { AlzheimerComponent } from './alzheimer/alzheimer.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    GaleriaComponent,
    PropositoComponent,
    ServiciosComponent,
    GeriavidaComponent,
    SeguridadComponent,
    ProtocolosComponent,
    VisitasComponent,
    HomeComponent,
    EnfermedadesComponent,
    ParkinsonComponent,
    AcvComponent,
    ArtrosisComponent,
    ArtritisComponent,
    OsteoporosisComponent,
    HipertensionarterialComponent,
    DiabetesmellitusComponent,
    DemenciasenilComponent,
    AlzheimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
