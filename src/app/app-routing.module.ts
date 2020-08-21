import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import { QuizBuildComponent } from './quiz/quiz-create/quiz-build/quiz-build.component';


const routes: Routes = [
  { path:'', component: QuizListComponent },
  { path:'create', component: QuizCreateComponent },
  { path: 'build', component: QuizBuildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
