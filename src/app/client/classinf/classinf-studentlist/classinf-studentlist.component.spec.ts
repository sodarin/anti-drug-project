import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfStudentlistComponent } from './classinf-studentlist.component';

describe('ClassinfStudentlistComponent', () => {
  let component: ClassinfStudentlistComponent;
  let fixture: ComponentFixture<ClassinfStudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfStudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfStudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
