import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/_services/trabajador.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrabajadorInterface } from '../../interface/listado'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  content?: TrabajadorInterface[];

  form: any = {
    //username: null,
    //email: null,
    //password: null
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


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  submitted = false;

  constructor(private traService: TrabajadorService, private router: Router) { }
  

  ngOnInit(): void {
    this.traService.getPublicTrabajador().subscribe(
      data => {
        this.submitted = true;
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(): void {
    const { nombre, apellido, edad, cargo, fecha_nacimiento, dni, direccion, talla, peso, masa_corporal, telefono } = this.form;

    this.traService.postTrabajador (nombre, apellido, edad, cargo, fecha_nacimiento, dni, direccion, talla, peso, masa_corporal, telefono ).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        //this.submitted = false;
        //this.router.navigate(['/listado de usuario'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  navigate() {
    this.router.navigate(['/listado de usuario'])
  }

  editarTrabajador(id:any){
    this.router.navigate(['editar', id]);
    console.log(id);
  }

  seguridad(){
    this.router.navigate(['video']);
  }

}
