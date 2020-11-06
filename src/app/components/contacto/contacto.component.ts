import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from '../../servicios/api/api.service';
import { contactoI } from '../../modelos/contacto.interface';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContacto: FormGroup;

  constructor( private _api:ApiService, private formBuilder: FormBuilder ) {
    this.formContacto = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      correo : ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    AOS.init();
  }

  enviarDudas () {
    
      console.log(this.formContacto.value);
      this._api.contacto(this.formContacto.value).subscribe(res => {
        console.log(res);
        swal.fire({
          icon: 'success',
          title: 'Tu mensaje se ha enviado correctamente'
        });
        this.formContacto.reset();
      },
      err=> {
        console.log(err);
        swal.fire({
          icon: 'error',
          title: 'Verifique los campos'
        });
      });
  }
  
}


// Validar campos
