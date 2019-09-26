import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTeacherSettingComponent } from './head-teacher-setting.component';

describe('HeadTeacherSettingComponent', () => {
  let component: HeadTeacherSettingComponent;
  let fixture: ComponentFixture<HeadTeacherSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTeacherSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTeacherSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
