import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRecommendModalComponent } from './teacher-recommend-modal.component';

describe('TeacherRecommendModalComponent', () => {
  let component: TeacherRecommendModalComponent;
  let fixture: ComponentFixture<TeacherRecommendModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRecommendModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRecommendModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
