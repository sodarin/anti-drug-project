import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTasksComponent } from './plan-tasks.component';

describe('PlanTasksComponent', () => {
  let component: PlanTasksComponent;
  let fixture: ComponentFixture<PlanTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
