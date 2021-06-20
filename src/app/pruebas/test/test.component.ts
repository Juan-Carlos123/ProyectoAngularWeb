import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../quiz.model';
import { QuizCovidService } from '../../quiz-covid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  quizzes: Quiz[]= [];

  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  randomize!: number;
  result = false;

  constructor( private quizService: QuizCovidService, private router: Router) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();
    this.randomize = Math.floor(Math.random() * this.quizzes.length);
  }

  onAnswer(option: boolean){
    this.answerSelected = true;

    setTimeout(() => {
      this.currentQuiz++;
      this.randomize = Math.floor(Math.random() * this.quizzes.length)
      this.answerSelected = false;
    }, 1000);

    if(option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
  }

  showResult(){
    this.result = true;
  }

  siguiente(){
    this.router.navigate(['video covid']);
  }

}
