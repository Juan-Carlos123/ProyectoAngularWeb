import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import { Router } from '@angular/router'
import domtoimage from 'dom-to-image';

import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-cons-covid',
  templateUrl: './cons-covid.component.html',
  styleUrls: ['./cons-covid.component.css']
})
export class ConsCovidComponent implements OnInit {
  email?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router){   
  }
  ngOnInit(): void{
      console.log('app.component cargando'); 
      const user = this.tokenStorageService.getUser();
      //this.roles = user.roles;
      this.email = user.email;
   
  }
  pdf(){
      var canvas = document.getElementById('pdf');
  
      domtoimage.toPng(canvas!).then((dataUrl)=>{
          let imagen= new Image();
          imagen.src=dataUrl;/*obtengo el screenshot*/
          let pdf =  new jsPDF('p', 'mm', [297, 210]);/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
          pdf.addImage( imagen, 0, 10, 210,180); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
          pdf.save( 'Constancia de Inducción COVID-19.pdf' ); /* descargamos el pdf con ese nombre.*/
      }
      );
  }

  today = Date.now();
    fixedTimezone = this.today;

  ruta(){
    this.router.navigate(['rc']);
  }

}
