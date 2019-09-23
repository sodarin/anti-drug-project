import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSettingComponent } from './student-setting.component';

describe('StudentSettingComponent', () => {
  let component: StudentSettingComponent;
  let fixture: ComponentFixture<StudentSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
