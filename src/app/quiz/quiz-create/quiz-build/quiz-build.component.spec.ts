import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBuildComponent } from './quiz-build.component';

describe('QuizBuildComponent', () => {
  let component: QuizBuildComponent;
  let fixture: ComponentFixture<QuizBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
