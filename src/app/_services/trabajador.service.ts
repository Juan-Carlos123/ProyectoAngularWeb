import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrabajadorInterface } from '../interface/listado'
import { TrabajadorI } from '../interface/edit'

const AUTH_API = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TrabajadorService {
  constructor(private http: HttpClient) { }

  postTrabajador(nombre:string, apellido:string, edad:string, cargo:string, fecha_nacimiento:string, 
                 dni:string, direccion:string, talla:string, peso:string, masa_corporal:string, telefono:string ): Observable<any> {
    return this.http.post(AUTH_API + 'trabajador', {
      nombre,
      apellido,
      edad,
      cargo,
      fecha_nacimiento,
      dni,
      direccion,
      talla,
      peso,
      masa_corporal,
      telefono
    }, httpOptions);
  }

  getPublicTrabajador(): Observable<any> {
    return this.http.get(AUTH_API + 'trabajador');
  }

  getIdTrabajador(id:any):Observable<TrabajadorInterface>{
    let direccion = AUTH_API + 'trabajador/'+ id;
    return this.http.get<TrabajadorInterface>(direccion);
  }

  putIdTrabajador(form:TrabajadorI):Observable<TrabajadorInterface>{
    let direccion = AUTH_API + 'trabajador/' + form.id!;
    return this.http.put<TrabajadorInterface>(direccion, form);
  }


}