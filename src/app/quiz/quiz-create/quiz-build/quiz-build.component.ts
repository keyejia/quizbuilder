import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-quiz-build',
  templateUrl: './quiz-build.component.html',
  styleUrls: ['./quiz-build.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuizBuildComponent implements OnInit {
  chipAddOnBlur = true;
  floatLabelAlways = new FormControl('always');
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: any[] = [];
  quizCreated = false;
  questions: any[] = [];
  quiz: any;
  constructor() { }
  topOfPage = 'top';
  currQuestion = 0;

  ngOnInit(): void {
    this.quiz = {title: "title!!!!"}
  }
  //Chip logic
  addChip(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }
  removeChip(tag: any): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  createQuiz(){
    this.quizCreated = true;
  }
  addQuestion(){
    const emptyQuestion = {
      question: "",
      choices:[
        {c:false,ans:""},
        {c:false,ans:""},
        {c:false,ans:""},
        {c:true,ans:""}
      ],
      tag: ""
    }
    this.questions.push(emptyQuestion);
    this.currQuestion = this.questions.length-1;
  }
  moveToQuestion(question){
    this.currQuestion = this.questions.indexOf(question);
  }

  letterOf(choices, choice){
    const indx = choices.indexOf(choice);
    return String.fromCharCode(indx+65);
  }
  removeChoice(choices, choice){
    const index = choices.indexOf(choice);
    if (index >= 0 && choices.length>2) {
      choices.splice(index, 1);
    }
  }
  addChoice(question) {
    const choice = {c:false, ans:""}
    question.choices.push(choice);
  }
  saveQuestion(question){
    /// UPDATE THE QUESTION
  }
  removeQuestion(question: any){
    const indx = this.questions.indexOf(question);
    if (indx>=0){
      this.questions.splice(indx, 1);
    }
    this.currQuestion = this.questions.length-1;
  }

}
