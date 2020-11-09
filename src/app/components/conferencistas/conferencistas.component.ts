import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
import { SwalComponent, SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css'],

})
export class ConferencistasComponent implements OnInit {

  @ViewChild('swalidISC') private swalDetallesISC: SwalComponent;
  @ViewChild('swalidIGE') private swalDetallesIGE: SwalComponent;
  @ViewChild('swalidIND') private swalDetallesIND: SwalComponent;
  @ViewChild('swalidIQ') private swalDetallesIQ: SwalComponent;
  @ViewChild('swalidIIAS') private swalDetallesIIAS: SwalComponent;
  @ViewChild('swalidMag') private swalDetallesMag: SwalComponent;
  @ViewChild('swalidPan') private swalDetallesPan: SwalComponent;



  conferensistasIGE: {};
  conferencistasISC: {};
  conferencistasIIAS: {};
  conferencistasIND: {};
  conferencistasIQ: {};
  conferensistasMagistral: {};
  conferensistasPanelistas: {};


  conferencistaFiltradoISC: any;
  conferencistaFiltradoIGE: any;
  conferencistaFiltradoIND: any;
  conferencistaFiltradoIQ: any;
  conferencistaFiltradoIIAS: any;
  conferencistaFiltradoMag: any;
  conferencistaFiltradoPan: any;




  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    forkJoin({
      confIge: this.http.get('../../../assets/data/conferencistas-ige.json'),
      confInd: this.http.get('../../../assets/data/conferencistas-ind.json'),
      confIias: this.http.get('../../../assets/data/conferencistas-iias.json'),
      confIq: this.http.get('../../../assets/data/conferencistas-iq.json'),
      confIsc: this.http.get('../../../assets/data/conferencistas-isc.json'),
      confMag: this.http.get('../../../assets/data/conferencistas-magistrales.json'),
      confPan: this.http.get('../../../assets/data/conferencistas-expertos.json')

    }).subscribe(data => {
      this.conferensistasIGE = data.confIge;
      this.conferencistasIND = data.confInd;
      this.conferencistasIIAS = data.confIias;
      this.conferencistasIQ = data.confIq;
      this.conferencistasISC = data.confIsc;
      this.conferensistasMagistral = data.confMag;
      this.conferensistasPanelistas = data.confPan;
    });
  }



  mostrarDetallesISC(evento: any, id) {
    if (id == this.conferencistasISC[id].id) {
      this.conferencistaFiltradoISC = this.conferencistasISC[id];
    }
    this.swalDetallesISC.fire();

  }

  mostrarDetallesIGE(evento: any, id) {
    if (id == this.conferensistasIGE[id].id) {
      this.conferencistaFiltradoIGE = this.conferensistasIGE[id];
    }
    this.swalDetallesIGE.fire();
  }

  mostrarDetallesIND(evento: any, id) {
    if (id == this.conferencistasIND[id].id) {
      this.conferencistaFiltradoIND = this.conferencistasIND[id];
    }
    this.swalDetallesIND.fire()
  }

  mostrarDetallesIQ(evento: any, id) {
    if (id == this.conferencistasIQ[id].id) {
      this.conferencistaFiltradoIQ = this.conferencistasIQ[id];
    }
    this.swalDetallesIQ.fire()
  }

  mostrarDetallesIIAS(evento: any, id) {
    if (id == this.conferencistasIIAS[id].id) {
      this.conferencistaFiltradoIIAS = this.conferencistasIIAS[id];
    }
    this.swalDetallesIIAS.fire()
  }


  mostrarDetallesMag(evento: any, id) {
    if (id == this.conferensistasMagistral[id].id) {
      this.conferencistaFiltradoMag = this.conferensistasMagistral[id];
    }
    this.swalDetallesMag.fire()
  }


  
  mostrarDetallesPan(evento: any, id) {
    if (id == this.conferensistasPanelistas[id].id) {
      this.conferencistaFiltradoPan = this.conferensistasPanelistas[id];
    }
    this.swalDetallesPan.fire()
  }


}

