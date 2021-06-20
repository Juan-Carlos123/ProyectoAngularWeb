import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from 'src/app/_services/trabajador.service';
import { TrabajadorInterface } from '../../interface/listado'

@Component({
  selector: 'app-listausuario',
  templateUrl: './listausuario.component.html',
  styleUrls: ['./listausuario.component.css']
})
export class ListausuarioComponent implements OnInit {

  //content?: any;
  content?: TrabajadorInterface[];

  constructor(private trabajadorService: TrabajadorService, private router:Router) { }

  ngOnInit(): void {
    this.trabajadorService.getPublicTrabajador().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  editarTrabajador(id:any){
    this.router.navigate(['editar', id]);
    console.log(id);
  }

  seguridad(){
    this.router.navigate(['video']);
  }

}