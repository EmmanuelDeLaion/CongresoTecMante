import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import * as AOS from 'aos';
@NgModule({
  declarations: [
    AppComponent,
    FaqsComponent,
    CabeceraComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
