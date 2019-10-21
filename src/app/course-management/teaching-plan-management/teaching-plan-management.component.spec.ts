import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingPlanManagementComponent } from './teaching-plan-management.component';

describe('TeachingPlanManagementComponent', () => {
  let component: TeachingPlanManagementComponent;
  let fixture: ComponentFixture<TeachingPlanManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingPlanManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingPlanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
