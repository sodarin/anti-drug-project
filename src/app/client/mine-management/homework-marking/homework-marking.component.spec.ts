import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkMarkingComponent } from './homework-marking.component';

describe('HomeworkMarkingComponent', () => {
  let component: HomeworkMarkingComponent;
  let fixture: ComponentFixture<HomeworkMarkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkMarkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
