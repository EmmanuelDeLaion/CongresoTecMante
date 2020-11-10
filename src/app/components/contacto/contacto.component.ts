import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from '../../servicios/api/api.service';
import { contactoI } from '../../modelos/contacto.interface';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert2';
import { UtilsService } from '../../../assets/util/utils.service'


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formContacto: FormGroup;

  constructor( private _api:ApiService, private formBuilder: FormBuilder,private _utilService:UtilsService ) {
    this.formContacto = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      correo : ['', [Validators.email]],
      mensaje: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    AOS.init();
  }

  enviarDudas () {
    console.log(this.formContacto.value);
   this._api.contacto(this.formContacto.value).subscribe(res=> {
     console.log(res);
   },
   err=> {
     console.log(err);
 
   }
   ); 
   if(this.formContacto.value.nombre != "" && this.formContacto.value.correo != "" && this.formContacto.value.mensaje != ""){
    swal.fire({
      icon: 'success',
      title: 'Tu duda a sido enviado con exito'
    });
   }
   else{
    swal.fire({
      icon: 'error',
      title: 'Verifique los campos'
    });
   }
 }
}


// Validar campos
