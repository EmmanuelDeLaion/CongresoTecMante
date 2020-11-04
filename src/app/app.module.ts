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
<<<<<<< HEAD
    TemasComponent
=======
    RegistroComponent,
    VideoComponent,
    BrindadoComponent,
    MapaComponent,
    TalleresComponent,
    ObjetivoComponent
>>>>>>> b2dc26f25df8983eff82a9482e5d8d9fa1a20cb3
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
