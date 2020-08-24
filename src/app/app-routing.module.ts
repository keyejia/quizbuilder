import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizCreateComponent } from './quiz/quiz-create/quiz-create.component';
import { QuizBuildComponent } from './quiz/quiz-create/quiz-build/quiz-build.component';
import { QuizTakeComponent } from './quiz/quiz-take/quiz-take.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash:true,
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  { path:'', component: QuizListComponent },
  { path:'create', component: QuizCreateComponent },
  { path: 'build', component: QuizBuildComponent },
  { path: 'take', component: QuizTakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
