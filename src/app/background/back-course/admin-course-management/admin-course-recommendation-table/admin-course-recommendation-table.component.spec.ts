import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseRecommendationTableComponent } from './admin-course-recommendation-table.component';

describe('AdminCourseRecommendationTableComponent', () => {
  let component: AdminCourseRecommendationTableComponent;
  let fixture: ComponentFixture<AdminCourseRecommendationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseRecommendationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseRecommendationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
