import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizes: any[];
  constructor() { }


  ngOnInit(){
    this.quizes = [
      {"title": "First Quiz", "desciption":"..hunk asset optimization SourceMapDevToolPlugin main.93% after chunk asset optimization SourceMapDevToolPlugin", "tags": ["tag1","tag2","tag3"], "creator":"userName1"},
      {"title": "second Quiz", "desciption":"..hunk asset optimization SourceMapDevToolPlugin main.93% after chunk asset optimization SourceMapDevToolPlugin", "tags": ["tag1","tag2","tag3"], "creator":"userName2"},
      {"title": "third Quiz", "desciption":"..hunk asset optimization SourceMapDevToolPlugin main.93% after chunk asset optimization SourceMapDevToolPlugin", "tags": ["tag1","tag2","tag3"], "creator":"userName3"}
    ]
  }

}
