import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherblockComponent } from './teacherblock.component';

describe('TeacherblockComponent', () => {
  let component: TeacherblockComponent;
  let fixture: ComponentFixture<TeacherblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
