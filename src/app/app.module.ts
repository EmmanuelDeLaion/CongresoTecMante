import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ConferencistasComponent } from './components/conferencistas/conferencistas.component';
import { HttpClientModule } from "@angular/common/http";
import { FaqsComponent } from './components/faqs/faqs.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import * as AOS from 'aos';

import { BrindadoComponent } from './components/brindado/brindado.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { TemasComponent } from './components/temas/temas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VideoComponent } from './components/video/video.component';
import { ObjetivoComponent } from './components/objetivo/objetivo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesConfig } from './config/services.config';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    AppComponent,
    ConferencistasComponent,
    FaqsComponent,
    CabeceraComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    TalleresComponent,
    TemasComponent,
    RegistroComponent,
    TemasComponent,
    VideoComponent,
    BrindadoComponent,
    MapaComponent,
    TalleresComponent,
    ObjetivoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [ ServicesConfig ],
  bootstrap: [AppComponent]
})
export class AppModule { }
