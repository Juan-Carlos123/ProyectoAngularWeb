import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  total=5;
  puntos=0;
  myForm = document.forms[<any> "quiz"];
  //form:any = document.getElementsByName('p');
  //myForm = document.forms
  //resultado = document.getElementById("resultado");
  respuestas = ["a","b","c","d","e"];


  //respuestasCorrectas=["a","b","c","d","e"];
  //respuestasUsuario=new Array();
  //respuestasPregunta=new Array();
  //aciertos=0;
  //countPreguntas=0;
  //bien="bien.png";
  //mal="mal.png";

  verificarRespuestas(){
    for(var i = 1; i <= this.total; i++){
      if (this.myForm["p" + i].value === null || this.myForm["p" + i].value === "") {
        alert("Por favor responde la pregunta " + i);
        return false;
      }else{
        if (this.myForm["p" + 1].value === this.respuestas[i - 1]) {
          this.puntos++
          }
        }
      }
      console.log(this.puntos);
      return false;
  }
}
