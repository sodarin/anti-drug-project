import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExamComponent } from './my-exam.component';

describe('MyExamComponent', () => {
  let component: MyExamComponent;
  let fixture: ComponentFixture<MyExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
