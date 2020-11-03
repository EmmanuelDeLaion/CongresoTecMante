import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css']
})
export class ConferencistasComponent implements OnInit {

  conferensistasIGE: {};
  conferencistasISC: {};
  conferencistasIIAS: {};
  conferencistasIND: {};
  conferencistasIQ: {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    forkJoin({
      confIge: this.http.get('../../../assets/data/conferencistas-ige.json'),
      confInd: this.http.get('../../../assets/data/conferencistas-ind.json'),
      confIias: this.http.get('../../../assets/data/conferencistas-iias.json')
    }).subscribe(data => {
      this.conferensistasIGE = data.confIge;
      console.log(data.confIge);
      this.conferencistasIND = data.confInd;
      this.conferencistasIIAS = data.confIias;
    });
  }

}
