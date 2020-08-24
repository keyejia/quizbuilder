import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.scss']
})
export class QuizTakeComponent implements OnInit {
  report;
  quiz = {
    "title": "First Quiz",
    "desciption":"..hunk asset optimization SourceMapDevToolPlugin main.93% after chunk asset optimization SourceMapDevToolPlugin",
    "tags": ["tag1","tag2","tag3"],
    "creator":"userName1",
    questions:[{
      question: "What is 2*2? ",
      choices:[
        {c:false,ans:"1",choose:false},
        {c:false,ans:"2",choose:false},
        {c:false,ans:"3",choose:false},
        {c:true,ans:"4",choose:false}
      ],
      correct:null,
      submitted:false,
      tag: ""
    },
    {
      question: "What is 2*1? ",
      choices:[
        {c:false,ans:"1",choose:false},
        {c:true,ans:"2",choose:false},
        {c:false,ans:"3",choose:false},
        {c:false,ans:"4",choose:false}
      ],
      correct:null,
      submitted:false,
      tag: ""
    }
  ]
  }

  constructor() { }

  ngOnInit(): void {
  }
  letterOf(choices, choice){
    const indx = choices.indexOf(choice);
    return String.fromCharCode(indx+65);
  }
  checkQestion(question){
    for (let i =0; i < question.choices.length; i++){
      if (question.choices[i].c != question.choices[i].choose){
        question.correct = false;
        return
      }
    }
    question.correct=true;
    return
  }
}
