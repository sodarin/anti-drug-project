import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionRecordComponent } from './question-record.component';

describe('QuestionRecordComponent', () => {
  let component: QuestionRecordComponent;
  let fixture: ComponentFixture<QuestionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
