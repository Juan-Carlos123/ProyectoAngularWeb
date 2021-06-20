import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/_services/trabajador.service';
import { Router, ActivatedRoute } from '@angular/router';
import {TrabajadorI} from '../../interface/edit'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editartrabajador',
  templateUrl: './editartrabajador.component.html',
  styleUrls: ['./editartrabajador.component.css']
})
export class EditartrabajadorComponent implements OnInit {

  form: any = {
    nombre: null,
    apellido: null,
    edad: null,
    cargo: null,
    fecha_nacimiento: null,
    dni: null,
    direccion: null,
    talla: null,
    peso: null,
    masa_corporal: null,
    telefono: null
  };

  //isSuccessful = false;


  constructor(private activerouter:ActivatedRoute, private traService: TrabajadorService, private router: Router) { }

  datosTrabajador?:TrabajadorI;

  editarForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    edad: new FormControl(''),
    cargo: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    dni: new FormControl(''),
    direccion: new FormControl(''),
    talla: new FormControl(''),
    peso: new FormControl(''),
    masa_corporal: new FormControl(''),
    telefono: new FormControl('')
  });
  

  ngOnInit(): void {
    let trabajadorid = this.activerouter.snapshot.paramMap.get('id');
    //let token = this.getToken();
    this.traService.getIdTrabajador(trabajadorid).subscribe(
      data => {
        //data = data?[0];
        this.editarForm.setValue({
          'id': data.id,
          'nombre': data.nombre,
          'apellido': data.apellido,
          'edad': data.edad,
          'cargo': data.cargo,
          'fecha_nacimiento': data.fecha_nacimiento,
          'dni': data.dni,
          'direccion': data.direccion,
          'talla': data.talla,
          'peso': data.peso,
          'masa_corporal': data.masa_corporal,
          'telefono': data.telefono,
        });
        //this.isSuccessful = true;
        //console.log(this.editarForm.value);
        //console.log(data)
      })
    //console.log(token);

  }

  /*getToken(){
    return localStorage.getItem('token');
  }*/

  postForm(form:TrabajadorI){
    this.traService.putIdTrabajador(form).subscribe(
      data=>{
        console.log(form)
    });
    
    this.router.navigate(['/listado de usuario']);

  }

  navigate(){
    
  }
}
