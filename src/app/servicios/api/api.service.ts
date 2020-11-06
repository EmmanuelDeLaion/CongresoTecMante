import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { registroI } from '../../modelos/registro.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactoI } from '../../modelos/contacto.interface';
import { correoI } from '../../modelos/correo.interface';
import { ServicesConfig } from '../../config/services.config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  url:string = "http://127.0.0.1:8000";

  constructor( private _http:HttpClient, private servicesConfig:ServicesConfig ) { }

  registroByForm( body: any ):Observable<any> {
    return this._http.post<registroI>(this.servicesConfig.APP_ENDPOINT + 'api/registro', body);
  }

  contacto ( body:any ):Observable<any> {
    return this._http.post<contactoI>(this.servicesConfig.APP_ENDPOINT + 'api/contacto', body);
  }

  correo( body:any ):Observable<any> {
    return this._http.post<correoI>(this.servicesConfig.APP_ENDPOINT + 'api/correo', body);
  }

}
