import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-quiz',
  templateUrl: './choose-quiz.component.html'
})
export class ChooseQuizComponent implements OnInit {


  public enableLearn: boolean;
  public enableRealWhithTime: boolean;
  public enableRealWhithOutTime: boolean;

  public modo: string;


  constructor(private router: Router) { }

  ngOnInit() {
  	 this.modo = "LEARN";
  }

  changeTipo(tipo: number) {
    if(tipo === 1){
     this.modo = "LEARN";
    }else if(tipo === 2){
     this.modo = "REAL_WITH_TIME";
    }else{
     this.modo = "REAL_WITH_OUT_TIME";
    }
  }

  submitQuiz(){
    if(this.modo === "LEARN"){
     this.router.navigate(['learn-quiz']);

    }else if(this.modo === "REAL_WITH_TIME"){
     this.router.navigate(['real-quiz',true]);
    }else{
     this.router.navigate(['real-quiz',false]);
    }
  }

}
