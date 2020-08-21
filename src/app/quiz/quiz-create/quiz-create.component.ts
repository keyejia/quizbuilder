import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss']
})
export class QuizCreateComponent implements OnInit {
  quizes: any[];
  constructor() { }

  ngOnInit(){
    this.quizes = [
      {"title": "First Quiz", "desciption":"..hunk asset optimization SourceMapDevToolPlugin main.93% after chunk asset optimization SourceMapDevToolPlugin", "tags": ["tag1","tag2","tag3"], "creator":"userName1"}
    ]
  }

}
