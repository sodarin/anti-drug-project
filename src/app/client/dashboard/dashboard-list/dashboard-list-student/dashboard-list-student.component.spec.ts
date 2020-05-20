import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListStudentComponent } from './dashboard-list-student.component';

describe('DashboardListStudentComponent', () => {
  let component: DashboardListStudentComponent;
  let fixture: ComponentFixture<DashboardListStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
