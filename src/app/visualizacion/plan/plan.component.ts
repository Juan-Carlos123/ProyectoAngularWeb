import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(){   
  }
  ngOnInit(): void{
      console.log('app.component cargando'); 
   
  }
  pdf(){
      var canvas = document.getElementById('pdf');
  
      domtoimage.toPng(canvas!).then((dataUrl)=>{
          let imagen= new Image();
          imagen.src=dataUrl;/*obtengo el screenshot*/
          let pdf =  new jsPDF('p', 'mm', [297, 210]);/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
          pdf.addImage( imagen, 0, 10, 210,180); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
          pdf.save( 'Obligaciones Generales.pdf' ); /* descargamos el pdf con ese nombre.*/
      }
      );
  }

}
