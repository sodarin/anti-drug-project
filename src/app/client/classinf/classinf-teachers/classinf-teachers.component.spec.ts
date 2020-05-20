import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinfTeachersComponent } from './classinf-teachers.component';

describe('ClassinfTeachersComponent', () => {
  let component: ClassinfTeachersComponent;
  let fixture: ComponentFixture<ClassinfTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassinfTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassinfTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
