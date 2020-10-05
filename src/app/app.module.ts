import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RealQuizComponent } from './real-quiz/real-quiz.component';
import { LearnQuizComponent } from './learn-quiz/learn-quiz.component';
import { ChooseQuizComponent } from './choose-quiz/choose-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    RealQuizComponent,
    LearnQuizComponent,
    ChooseQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
