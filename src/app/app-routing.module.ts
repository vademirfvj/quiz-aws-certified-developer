import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealQuizComponent } from './real-quiz/real-quiz.component';
import { LearnQuizComponent } from './learn-quiz/learn-quiz.component';
import { ChooseQuizComponent } from './choose-quiz/choose-quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'choose-quiz', pathMatch: 'full' },
  { path: 'choose-quiz', component: ChooseQuizComponent },
  { path: 'real-quiz/:time', component: RealQuizComponent },
  { path: 'learn-quiz', component: LearnQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
