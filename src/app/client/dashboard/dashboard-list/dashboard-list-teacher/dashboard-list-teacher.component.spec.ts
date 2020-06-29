import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListTeacherComponent } from './dashboard-list-teacher.component';

describe('DashboardListTeacherComponent', () => {
  let component: DashboardListTeacherComponent;
  let fixture: ComponentFixture<DashboardListTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
