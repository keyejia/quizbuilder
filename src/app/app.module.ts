import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import { QuizBuildComponent } from './quiz/quiz-create/quiz-build/quiz-build.component';
import { QuizTakeComponent } from './quiz/quiz-take/quiz-take.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizListComponent,
    QuizCreateComponent,
    QuizBuildComponent,
    QuizTakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
