import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor() {}
  esEstudiante = false;
  estudiante(event): void {
    this.esEstudiante = event.target.checked;
  }
  ngOnInit(): void {}
}
