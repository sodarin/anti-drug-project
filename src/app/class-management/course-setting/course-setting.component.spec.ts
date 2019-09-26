import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSettingComponent } from './course-setting.component';

describe('CourseSettingComponent', () => {
  let component: CourseSettingComponent;
  let fixture: ComponentFixture<CourseSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
