import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from '../../servicios/api/api.service';
import { registroI } from '../../modelos/registro.interface';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { correoI } from '../../modelos/correo.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  
  formRegistro: FormGroup;
  formCorreo:  FormGroup;
    
  constructor( private _api:ApiService, private formBuilder: FormBuilder ) {
    this.formRegistro = this.formBuilder.group({

      nombreCompleto : ['', [Validators.required]],
      fechaNacimiento : ['', [Validators.required]],
      sexo : ['', [Validators.required]],
      paisProcedencia : ['', [Validators.required]],
      estadoProcedencia : ['', [Validators.required]],
      correo : ['', [Validators.email]],
      carrera: [''],
      semestre: [''],
      institutoProcedencia: ['']

    });

    /*this.formCorreo = this.formBuilder.group({
      nombreCompleto : ['', [Validators.required]],
      correo  :  ['', [Validators.required]]
    }); */
  }
  esEstudiante = false;
  estudiante(event): void {
    this.esEstudiante = event.target.checked;
  }

  ngOnInit(): void {
  }

  registrar () {


     console.log(this.formRegistro.value);
    this._api.registroByForm(this.formRegistro.value).subscribe(res=> {
      console.log(res);
      swal.fire({
        icon: 'success',
        title: 'Se ha registrado correctamente'
      });
    this.formRegistro.reset();
    },
    err=> {
      console.log(err);
      swal.fire({
        icon: 'error',
        title: 'Verifique los campos'
      });
    }
    ); 
  }

  enviarCorreo(){
    console.log(this.formRegistro.value);
    
    var nombreCompleto = this.formRegistro.value.nombre;
    var correo         = this.formRegistro.value.correo;

    this._api.correo(this.formRegistro.value).subscribe(res=> {
      console.log(res);
      swal.fire({
        icon: 'success',
        title: 'Confirmación enviada',
        text: 'Por favor ingrese al correo proporcionado y confirme su registro'
      });
      this.formRegistro.reset();
    },
    err=> {
      console.log(err);
      swal.fire({
        icon: 'error',
        title: 'Verifique los campos'
      });
    }
    );
  } 

  

}
