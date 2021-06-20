import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../quiz.model';
import { ArchivoService } from '../../archivo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})

  export class ArchivoComponent implements OnInit  {

  quizzes: Quiz[]= [];
  r! : boolean;
  ra! : string;
  re : Array<boolean> = new Array();

  //currentQuiz = 0;
  //answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  //randomize!: number;
  result = false;

  
   op=[true, false];

  constructor( private quizService: ArchivoService, private router: Router) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes(); 
    //this.randomize = Math.floor(Math.random() * this.quizzes.length);
  }
  


  onAnswer(correct: boolean){
    //this.ra = this.quizzes[0].answer[0].option
    //console.log(correct)
    //for (let i = 0; i < 10; i++) {

      /*this.r = correct
      if(this.r = false){
        this.correctAnswers = 0

      }else if(this.r=true){
        this.re.push(this.r)
        this.correctAnswers++
      }*/
      
    
    

    //setTimeout(() => {
      //this.currentQuiz++;
      //this.randomize = Math.floor(Math.random() * this.quizzes.length)
      //this.answerSelected = false;
    //});

    /*for(var i = 0;i < 10; i++){
      this.r = this.quizzes[i].answer[i].correct.valueOf()
      this.re = this.r.valueOf().toString();
      console.log(this.re);
      
    }*/

    if(correct=true){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }

  showResult(){
    //console.log(this.re)
    this.result = true;
  }

  siguiente(){
    this.router.navigate(['video']);
  }

}
