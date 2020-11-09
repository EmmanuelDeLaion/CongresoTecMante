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

 
  conferensistasIGE: {};
  conferencistasISC: {};
  conferencistasIIAS: {};
  conferencistasIND: {};
  conferencistasIQ: {};
  constructor(private http: HttpClient) { 
   
  }

  ngOnInit(): void {
    forkJoin({
      confIge: this.http.get('../../../assets/data/conferencistas-ige.json'),
      confInd: this.http.get('../../../assets/data/conferencistas-ind.json'),
      confIias: this.http.get('../../../assets/data/conferencistas-iias.json'),
      confIq: this.http.get('../../../assets/data/conferencistas-iq.json'),
      confIsc: this.http.get('../../../assets/data/conferencistas-isc.json')
    }).subscribe(data => {
      this.conferensistasIGE = data.confIge;
      this.conferencistasIND = data.confInd;
      this.conferencistasIIAS = data.confIias;
      this.conferencistasIQ = data.confIq;
      this.conferencistasISC = data.confIsc;
    }); 
  }
  


  verDetalles(id){
    console.log('Hola' + id);
  }


  mostrarDetallesISC(evento: any,id){
    // forkJoin({
    //   confIsc: this.http.get('../../../assets/data/conferencistas-isc.json')
    // }).subscribe(data => {
    //   this.conferencistasISC = data.confIsc;
    // }); 
     this.swalDetallesISC.fire()
  }
 
  mostrarDetallesIGE(evento: any,id){
 
     this.swalDetallesIGE.fire()
  }

  mostrarDetallesIND(evento: any,id){
 
     this.swalDetallesIND.fire()
  }

  mostrarDetallesIQ(evento: any,id){
 
     this.swalDetallesIQ.fire()
  }

  mostrarDetallesIIAS(evento: any,id){
 
     this.swalDetallesIIAS.fire()
  }
  

}

 