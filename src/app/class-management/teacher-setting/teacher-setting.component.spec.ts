import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSettingComponent } from './teacher-setting.component';

describe('TeacherSettingComponent', () => {
  let component: TeacherSettingComponent;
  let fixture: ComponentFixture<TeacherSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
